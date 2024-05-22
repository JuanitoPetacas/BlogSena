import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";

export const usuario = sequelize.define("usuario", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idrol:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
usuario.associate = (models) => {
  usuario.belongsTo(models.rol, {
    foreignKey: {
      allowNull: false,
    },
  });
  return usuario;
};
