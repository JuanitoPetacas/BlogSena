import express from "express";
import cors from "cors";
import { sequelize } from "./src/models/database.js";
import rutaUsuario from "./src/routes/usuario.routes.js";
import rutaRol from "./src/routes/rol.routes.js";
import rutaComentario from "./src/routes/comentario.routes.js";
import rutaPublicacion from "./src/routes/publicacion.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3100;
app.use(rutaUsuario);
app.use(rutaRol);
app.use(rutaComentario);
app.use(rutaPublicacion);

app.listen(port, () => {
  console.log(`Servidor encendido en puerto: ${port}`);
});

//sincronizacion de schemes y orm
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("sincronizacion ok!");
  })
  .catch((error) => {
    console.log(`error en la sincronizacion`);
  });
