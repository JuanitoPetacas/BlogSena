import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";

export const publicacion = sequelize.define("publicacion", {
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

publicacion.associate = (models) => {
  publicacion.hasMany(models.comentario, {});
  return publicacion;
};
