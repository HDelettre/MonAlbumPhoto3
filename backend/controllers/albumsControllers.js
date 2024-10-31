const ALBUMS = require("../models/albumsModel");
//
exports.createNewAlbum = async (req, res) => {
  // CHECK IF USER EXIST AND IS CONNECTED
  // CHECK IF ALBUM ALLREADY EXIST
  // CHECK IF REQUEST DATA ARE CORRECT
  // CREATE AND SAVE ALBUM
}

exports.getAllAlbums = async (req, res) => {
  // CHECK IF ALBUMS EXIST
  // RETURN ALBUMS DATA
}

exports.getOneAlbum = async (req, res) => {
  // CHECK IF ALBUM EXIST
  // RETURN ALBUM DATA
}

exports.updateAlbum = async (req, res) => {
  // CHECK IF USER EXIST AND IS CONNECTED
  // CHECK IF ALBUM EXIST
  // CHECK IF USER IS AUTHORIZED TO UPDATE THIS ALBUM
}

exports.deleteAlbum = async (req, res) => {
  // CHECK IF USER EXIST AND IS CONNECTED
  // CHECK IF ALBUM EXIST
  // CHECK IF USER IS AUTHORIZED TO DELETE THIS ALBUM
  // DELETE ALL PICTURES OF ALBUM
}