const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
// PICTURES MODEL
const PICTURES = sequelize.define("PICTURES", {
  pictureId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  albumId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    allowNull: false,
  },
  fileName: {
    type: DataTypes.STRING,
  },
  likedBy: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
});
module.exports = PICTURES;
