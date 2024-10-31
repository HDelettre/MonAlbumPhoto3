const USERS = require("../models/usersModel");
const bcrypt = require("bcrypt");
//
exports.createNewUser = async (req, res) => {
  // CHECK IF USER ALLREADY EXIST
  // CHECK IF REQUEST DATA ARE CORRECT
  // HASH PASSWORD
  // CREATE AND SAVE USER
}

exports.loginUser = async (req, res) => {
  // CHECK IF EMAIL & PASSWORD IN REQUEST
  // CHECK IF USER EXIST
  // CHECK IF PASSWORD IS CORRECT
  // RETURN USER DATA WITHOUT PASSWORD
}

exports.updateUser = async (req, res) => {
  // CHECK IF USER EXIST AND IS CONNECTED
  // CHECK IF USER IS AUTHORIZED TO UPDATE THIS PROFILE
  // IF AVATAR FILE IS UPDATED, DELETE PREVIOUS PICTURE
}

exports.deleteUser = async (req, res) => {
  // CHECK IF USER EXIST AND IS CONNECTED
  // CHECK IF USER IS AUTHORIZED TO DELETE THIS PROFILE
  // DELETE USER AVATAR PICTURE
}