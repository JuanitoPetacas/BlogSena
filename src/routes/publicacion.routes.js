import { Router } from "express";
import {
  buscar,
  crear,
  actualizar,
  eliminar,
} from "../controllers/publicacion.controller.js";

const publicacion = Router();

publicacion.get("/publicacion/listar", buscar);
publicacion.post("/publicacion/crear", crear);
publicacion.put("/publicacion/actualizar/:id", actualizar);
publicacion.delete("/publicacion/eliminar/:id", eliminar);
//campaña.delete("/campana/delete/:id", deleteCampaña);

export default publicacion;
