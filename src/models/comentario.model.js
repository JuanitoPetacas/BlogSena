import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";
import { usuario } from "./usuario.model.js";
import { publicacion } from "./publicacion.model.js";

export const comentario = sequelize.define("comentario",{
    
    asunto:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    idusuario:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idpublicacion:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})


usuario.hasMany(comentario,{})
comentario.belongsTo(usuario,{
    foreignKey: {
        allowNull: false,
    }
})

publicacion.hasMany(comentario,{})
comentario.belongsTo(publicacion,{
    foreignKey: {
        allowNull: false,
    }
})
