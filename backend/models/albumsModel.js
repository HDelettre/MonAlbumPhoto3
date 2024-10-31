const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");
const PICTURES = require("./picturesModel");
// ALBUMS MODEL
const ALBUMS = sequelize.define("ALBUMS", {
  albumId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    allowNull: false,
  },
  albumName: {
    type: DataTypes.STRING
  },
  coverPicture: {
    type: DataTypes.STRING,
    defaultValue: "defaultPicture.png"
  },
});
//
ALBUMS.hasMany(PICTURES, {foreignKey: "albumId", onDelete: "CASCADE"});
module.exports = ALBUMS;