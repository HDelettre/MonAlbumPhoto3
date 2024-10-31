const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const maximumPictureSize = 5000000;

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.fieldname === "avatarUser") {
      callback(null, "pictures/users");
    } else if (file.fieldname === "newPicture") {
      callback(null, "pictures/photos");
    }
  },

  filename: (req, file, callback) => {
    const fileExtension = MIME_TYPES[file.mimetype];
    let fileName = "";
    if (file.fieldname === "avatarUser") {
      fileName = req.body.lastName + "_" + Date.now() + "." + fileExtension;
    } else if (file.fieldname === "newPicture") {
      fileName = req.body.albumId + "_" + Date.now() + "." + fileExtension;
    }
    callback(null, fileName);
  },
});

const fileChecking = function (req, file, callback) {
  const fileExtension = MIME_TYPES[file.mimetype];
  if (fileExtension === undefined) {
    return callback(null, false, new Error("Extension non acceptée !"));
  }
  callback(null, true);
};

module.exports = multer({
  storage: storage,
  fileFilter: fileChecking,
  limits: { fileSize: maximumPictureSize },
}).fields([
  { name: "avatarUser", maxCount: 1 },
  { name: "newPicture", maxCount: 1 },
]);
