import { Router } from "express";
import {
  buscar,
  crear,
  eliminar,
} from "../controllers/rol.controller.js";

const rol = Router();

rol.get("/rol/listar", buscar);
rol.post("/rol/crear", crear);
rol.delete("/rol/eliminar/:id", eliminar);
//campaña.delete("/campana/delete/:id", deleteCampaña);

export default rol;
