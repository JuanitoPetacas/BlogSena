import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";
import { rol } from "./rol.model.js";

export const usuario = sequelize.define("usuario", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idrol: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

rol.hasOne(usuario, {});
usuario.belongsTo(rol, {
  foreignKey: {
    allowNull: false,
  },
});

