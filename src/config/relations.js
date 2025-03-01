import User from "../models/User";
import Qrcode from "../models/Qrcode";

const initializeRelations = () => {
  User.hasMany(Qrcode, { foreignKey: "userid" });
  Qrcode.belongsTo(User, { foreignKey: "userid" });
};

export default initializeRelations;
