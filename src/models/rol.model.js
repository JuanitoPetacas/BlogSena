import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";


export const rol = sequelize.define("rol",{
    tipoRol:{
        type: DataTypes.STRING,
        allowNull: false,
    }
}
)
 rol.associate = (models) => {
   rol.hasOne(models.Usuario, {
     foreignKey: "idrol",
   });
 };