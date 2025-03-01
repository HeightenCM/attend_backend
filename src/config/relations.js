import User from "../models/User";
import Qrcode from "../models/Qrcode";
import Event from "../models/Event";

const initializeRelations = () => {
  User.hasMany(Qrcode, { foreignKey: "userid" });
  Qrcode.belongsTo(User, { foreignKey: "userid" });

  User.belongsToMany(Event, { through: UserEvents });
  Event.belongsToMany(User, { through: UserEvents });
};

export default initializeRelations;
