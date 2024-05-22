import { publicacion } from "../models/publicacion.model.js";

export const buscar = async (req, res) => {
  const publicaciones = await publicacion.findAll();
  res.send({ publicaciones });
};

export const crear = async (req, res) => {
  const { fecha, imagen, descipcion } = req.body;
  const nuevaPublicacion = await publicacion.create({
    fecha,
    imagen,
    descipcion
   
  });
  res.send({ nuevaPublicacion });
};

export const actualizar = async (req, res) => {
  const { fecha, imagen, descipcion } = req.body;
  const publicaciones = await publicacion.findByPk(req.params.id);
  if (publicaciones) {
    publicacion.fecha = fecha;
     publicacion.imagen = imagen;
    publicacion.descripcion= descipcion;
   

    await publicaciones.save();
    res.send("ok");
  } else {
    res.status(400).send("no existe el id");
  }
};

export const eliminar = async (req, res) => {
  const publicaciones = await publicacion.findByPk(req.params.id);
  if (publicaciones) {
    await publicaciones.destroy();
    res.send("eliminado !");
  } else {
    res.status(400).send("no existe el id");
  }
};
