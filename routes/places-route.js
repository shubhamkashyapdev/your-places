const express = require("express");
const { body } = require("express-validator");

const fileUpload = require("../middleware/file-upload");
const placesController = require("../controllers/places-controller");
const auth = require("../middleware/check-auth");

const router = express.Router();

// route      GET, api/places/
// desc       get all places
// access     public
router.get("/", placesController.getPlaces);

// route      GET, api/places/:pid
// desc       get place by id
// access     public

router.get("/:pid", placesController.getPlaceById);

// route      GET, api/places/user/:uid
// desc       get user place by id
// access     public
router.get("/user/:uid", placesController.getUserPlacesById);

// check incomming req for valid token //

// route      POST, api/places/
// desc       add new place
// access     private
router.post(
  "/",
  [
    fileUpload.single("image"),
    auth,
    [
      body("title", "Title is requried").notEmpty(),
      body(
        "description",
        "Descritpion length must be 10 characters or more"
      ).isLength({ min: 10 }),
      body("address", "Address is required").notEmpty(),
    ],
  ],
  placesController.createPlace
);

// route      PATCH, api/places/:pid
// desc       update place by id
// access     private

router.patch(
  "/:pid",
  auth,
  [
    body("title", "Title is required").notEmpty(),
    body(
      "description",
      "Descritpion length must be 10 characters or more"
    ).isLength({ min: 10 }),
  ],
  placesController.updatePlaceById
);

// route      DELETE, api/places/:pid
// desc       delete place
// access     private

router.delete("/:pid", auth, placesController.deletePlace);

module.exports = router;
