const USERS = require("../models/usersModel");
const bcrypt = require("bcrypt");
//
async function userExist (email) {
  const emailExist = await USERS.findOne({
    where: { email: email },
  });

  if (emailExist) {
    return "status 409"
  } else {
    return "status 404"
  }
}

async function userData (data) {
  // REGEX EMAIL + FIRST AND LAST NAME
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const nameRegex = /^[A-Za-zéèêùçàÉÈÊÀÙ-\s]+$/;
  // TOUS LES CHAMPS SONT REQUIS
  for (const [key, value] of Object.entries(data)) {
    if (value === "") {
      return "Veuillez compléter tous les champs !";
    }
  }
  // CHECK EMAIL
  const checkEmail = emailRegex.test(data.email);
  if (checkEmail !== true) {
    return "Veuillez vérifier l'adresse mail !";
  }
  // CHECK PASSWORD FORMAT
  const checkPassword = passwordRegex.test(data.password);
  if (checkPassword !== true || data.password.length < 8) {
    return "Veuillez vérifier le format de votre mot de passe !";
  }
  // CHECK FIRSTNAME
  const checkFirstName = nameRegex.test(data.firstName);
  if (checkFirstName !== true) {
    return "Veuillez vérifier votre prénom !";
  }
  // CHECK LASTNAME
  const checklastName = nameRegex.test(data.lastName);
  if (checklastName !== true) {
    return "Veuillez vérifier votre nom !";
  }
  return "valid";
}

async function pictureCheck (data) {
  const mimeTypeAvailable = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
  };
  const mimeTypePicture = await mimeTypeAvailable[data.type];
  if (mimeTypePicture === undefined) {
    return "Les images acceptées doivent être au format .jpg, .jpeg ou .png";
  }
  if (data.size > 5000000) {
    return "Ce fichier est trop volumineux ! (Max 5 Mo)";
  }
  return "valid";
}

module.exports={userExist, userData, pictureCheck}