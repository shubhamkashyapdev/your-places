const axios = require("axios");
const HttpError = require("../models/http-error");
const API_KEY = "get google api key";

const getCordsForaddress = (address) => {
  const location = {
    lat: 25.197525,
    lng: 55.274288,
  };
  return location;
  // google api co-ordinates //
  /*
  const res = axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );
  const data = res.data;
  if (!data || data.status === "ZERO_RESULTS") {
    const err = new HttpError(
      "Could not find location for the specified address",
      422
    );
    return next(err);
  }
  const coordinates = data.results[0].geometry.location;
  return coordinates;
  */
};

module.exports = getCordsForaddress;
