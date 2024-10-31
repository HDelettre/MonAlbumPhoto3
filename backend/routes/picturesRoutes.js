const express = require("express");
const router = express.Router();
const multer = require("../config/multer.js");
const picturesCtrl = require("../controllers/picturesControllers");
// ROUTES
router.post("/",multer, picturesCtrl.addNewPicture);
router.get("/:albumId", picturesCtrl.getAllPictures);
router.get("/:pictureId", picturesCtrl.getOnePicture);
router.patch("/:pictureId",multer, picturesCtrl.updatePicture);
router.delete("/:pictureId", picturesCtrl.deletePicture);
// EXPORTS
module.exports = router;