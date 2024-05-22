import { Sequelize } from "sequelize";

// Instanciar la clase sequelize y le pasamos los parametros de conexion
export const sequelize = new Sequelize("blogsena", "root", "", {
  host: "localhost",
  dialect: "mysql", //ojo el dialecto define el gestor de base de datos, recordar descargar el driver
});

sequelize
  .authenticate()
  .then(() => {
    console.log("conexion exitosa");
  })
  .catch((error) => {
    console.log("error en la conexion", error);
  });
