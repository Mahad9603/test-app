import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";


const userModel = sequelize.define("User", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default userModel;
