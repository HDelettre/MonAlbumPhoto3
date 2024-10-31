const {
  userExist,
  userData,
  pictureCheck,
} = require("../middlewares/usersChecking");
const USERS = require("../models/usersModel");
const bcrypt = require("bcrypt");
//
exports.createNewUser = async (req, res) => {
  // CHECK IF REQUEST DATA ARE CORRECT
  const checkUserDataRequired = userData(req.body);
  if (checkUserDataRequired !== "valid") {
    return res.status(400).json({
      message:
        "Veuillez compléter tous les champs et respecter les formats demandés !",
    });
  }
  // CHECK PICTURE FORMAT AND SIZE
  if (req.body.avatarFile) {
    const checkPicture = pictureCheck(req.body.avatarFile);
    if (checkPicture !== "valid") {
      return res
        .status(401)
        .json({
          message:
            "L'image ne respecte pas le format demandé ou sa taille est trop importante !",
        });
    }
  }
  // FORMAT FIRSTNAME AND LASTNAME
  if (req.body.firstName.includes("-")) {
    const tiretLocation = req.body.firstName.search(/-/);
    req.body.firstName =
      req.body.firstName.charAt(0).toUpperCase() +
      req.body.firstName.slice(1, tiretLocation + 1) +
      req.body.firstName.charAt(tiretLocation + 1).toUpperCase() +
      req.body.firstName.slice(tiretLocation + 2);
  } else {
    req.body.firstName =
      req.body.firstName.charAt(0).toUpperCase() +
      req.body.firstName.slice(1).toLowerCase();
  }
  //
  req.body.lastName = req.body.lastName.toUpperCase();
  // CHECK IF USER ALLREADY EXIST
  const checkUserExist = userExist(req.body.email);
  if (checkUserExist === "status 409") {
    return res.status(409).json({
      message: "Il existe déjà un compte utilisant cette adresse mail !",
    });
  }
  // HASH PASSWORD
  const passwordHashed = await bcrypt.hash(req.body.password, 10);
  req.body.password = passwordHashed;
  // CREATE AND SAVE USER
  const newUser = USERS.build(req.body);
  if (req.body.avatarFile) {
    const pictureFile = JSON.parse(JSON.stringify(req.files.avatarUser))[0];
    newUser["avatarPicture"] = pictureFile.filename;
  }
  try {
    await newUser.save();
    return res
      .status(201)
      .json({ message: "Le compte a été créé avec succès !" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "CREATE USER : Erreur de Sauvegarde" + error });
  }
};

exports.loginUser = async (req, res) => {
  // CHECK IF EMAIL & PASSWORD IN REQUEST
  // CHECK IF USER EXIST
  // CHECK IF PASSWORD IS CORRECT
  // RETURN USER DATA WITHOUT PASSWORD
};

exports.updateUser = async (req, res) => {
  // CHECK IF USER EXIST AND IS CONNECTED
  // CHECK IF USER IS AUTHORIZED TO UPDATE THIS PROFILE
  // IF AVATAR FILE IS UPDATED, DELETE PREVIOUS PICTURE
};

exports.deleteUser = async (req, res) => {
  // CHECK IF USER EXIST AND IS CONNECTED
  // CHECK IF USER IS AUTHORIZED TO DELETE THIS PROFILE
  // DELETE USER AVATAR PICTURE
};
