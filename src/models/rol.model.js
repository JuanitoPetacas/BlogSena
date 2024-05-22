import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";


export const rol = sequelize.define("rol", {
  tipoRol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

