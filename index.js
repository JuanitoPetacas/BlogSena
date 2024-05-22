import express from express
import cors from cors
import { sequelize } from "sequelize"




const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3100;

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