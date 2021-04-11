const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const HttpError = require("../models/http-error");

const Place = require("../models/places-model");
const User = require("../models/users-model");

const getCordsForaddress = require("../utils/location");

const getPlaces = async (req, res, next) => {
  try {
    const places = await Place.find();
    console.log(places);
    if (!places) {
      const err = new HttpError("No Place Found", 404);
      return next(err);
    }
    res.json(places);
  } catch (err) {
    next(err);
  }
};

const getPlaceById = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.pid);
    if (!place) {
      const err = new HttpError("Could Not Find The Place!!", 404);
      return next(err);
    }
    res.json(place);
  } catch (err) {
    next(err);
  }
};

const getUserPlacesById = async (req, res, next) => {
  try {
    const userId = req.params.uid;

    const userPlaces = await User.findById(userId).populate("places");
    if (!userPlaces || userPlaces.length === 0) {
      return next(new HttpError("Could Not Find Place For This User!!", 404));
    }
    res.json(userPlaces.places);
  } catch (err) {
    next(err);
  }
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { title, description, address } = req.body;
  try {
    const coordinates = await getCordsForaddress(address);

    const place = new Place({
      title,
      description,
      image: req.file.path,
      location: coordinates,
      address,
      creator: req.userData.userId,
    });
    const user = await User.findById(req.userData.userId);
    if (!user) {
      return next(
        new HttpError("Could Not Found The User With Specified ID", 404)
      );
    }
    const session = await mongoose.startSession();
    await session.startTransaction();
    const response = await place.save({ session });
    user.places.push(place);
    await user.save({ session });
    await session.commitTransaction();

    res.status(201).json(response.places);
  } catch (err) {
    return next(err);
  }
};

const updatePlaceById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const placeId = req.params.pid;
  const { title, description } = req.body;

  try {
    const place = await Place.findById(placeId);

    if (req.userData.userId !== place.creator.toString()) {
      const error = new HttpError(
        "You Can't Edit This Place, Authorization Denied!!",
        403
      );
      return next(error);
    }
    place.title = title;
    place.description = description;
    await place.save();
    res.json(place);
  } catch (err) {
    next(err);
  }
};
const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId).populate("creator");
    console.log(req.userData.userId === place.creator._id.toString());
    if (req.userData.userId !== place.creator._id.toString()) {
      const error = new HttpError(
        "You Can't Delete This Place, Authorization Denied!!",
        403
      );
      return next(error);
    }
  } catch (err) {
    const error = new HttpError("There Is No Place To Delete.", 500);
    return next(error);
  }

  if (!place) {
    const error = new HttpError("Could not find place for this id.", 404);
    return next(error);
  }

  const imagePath = place.image;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete place.",
      500
    );
    return next(error);
  }

  fs.unlink(imagePath, (err) => console.error(err));

  res.status(200).json({ message: "Deleted place." });
};

module.exports = {
  getPlaces,
  getPlaceById,
  getUserPlacesById,
  createPlace,
  updatePlaceById,
  deletePlace,
};
