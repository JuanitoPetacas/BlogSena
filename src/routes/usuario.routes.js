import { Router } from "express";
import { buscar, crear, actualizar, eliminar } from "../controllers/usuario.controller.js";

const usuario = Router();

usuario.get("/usuario/listar", buscar);
usuario.post("/usuario/crear", crear);
usuario.put("/usuario/actualizar/:id", actualizar)
usuario.delete("/usuario/eliminar/:id", eliminar);
//campaña.delete("/campana/delete/:id", deleteCampaña);

export default usuario;
