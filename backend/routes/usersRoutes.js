const express = require("express");
const router = express.Router();
const multer = require("../config/multer.js");
const usersCtrl = require("../controllers/usersControllers");
// ROUTES
router.post("/signup",multer, usersCtrl.createNewUser);
router.post("/login", usersCtrl.loginUser);
router.patch("/:userId",multer, usersCtrl.updateUser);
router.delete("/:userId", usersCtrl.deleteUser);
// ??????
// router.get("/", usersCtrl.getAllUsers);
// router.get("/:userId", usersCtrl.getOneUser);
// EXPORTS
module.exports = router;