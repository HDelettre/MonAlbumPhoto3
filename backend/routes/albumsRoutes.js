const express = require("express");
const router = express.Router();
const albumsCtrl = require("../controllers/albumsControllers");
// ROUTES
router.post("/", albumsCtrl.createNewAlbum);
router.get("/", albumsCtrl.getAllAlbums);
router.get("/:albumId", albumsCtrl.getOneAlbum);
router.patch("/:albumId", albumsCtrl.updateAlbum);
router.delete("/:albumId", albumsCtrl.deleteAlbum);
// EXPORTS
module.exports = router;