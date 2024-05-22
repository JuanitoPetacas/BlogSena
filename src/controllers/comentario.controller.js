import { comentario } from "../models/comentario.model.js";

export const buscar = async (req, res) => {
  const comentarios = await comentario.findAll();
  res.send({ comentarios });
};

export const crear = async (req, res) => {
  const { asunto, idusuario, idpublicacion} = req.body;
  const nuevoComentario = await comentario.create({
    asunto,
    idusuario,
    idpublicacion
  });
  res.send({ nuevoComentario });
}

export const actualizar = async (req, res) => {
  const { asunto, idusuario, idpublicacion } = req.body;
  const comentarios = await comentario.findByPk(req.params.id);
  if (comentarios) {
    comentarios.asunto = asunto
    comentarios.idusuario = idusuario
    comentarios.idpublicacion = idpublicacion

    await comentarios.save();
    res.send("ok");
  } else {
    res.status(400).send("no existe el id");
  }
};

export const eliminar = async (req, res) => {
  const comentarios= await comentario.findByPk(req.params.id);
  if (comentarios) {
    await comentarios.destroy();
    res.send("eliminado !");
  } else {
    res.status(400).send("no existe el id");
  }
};
