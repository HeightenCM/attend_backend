const { DataTypes } = require("sequelize");
const database = require("../config/database");

const Event = database.define("Event", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Event;
