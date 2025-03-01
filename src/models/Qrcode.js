const { DataTypes } = require("sequelize");
const database = require("../config/database");

const Qrcode = database.define("Qrcode", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  eventid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  value: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Qrcode;
