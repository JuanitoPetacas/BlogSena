import { Router } from "express";
import {
  buscar,
  crear,
  actualizar,
  eliminar,
} from "../controllers/comentario.controller.js";

const comentario = Router();

comentario.get("/comentario/listar", buscar);
comentario.post("/comentario/crear", crear);
comentario.put("/comentario/actualizar/:id", actualizar);
comentario.delete("/comentario/eliminar/:id", eliminar);
//campaña.delete("/campana/delete/:id", deleteCampaña);

export default comentario;
