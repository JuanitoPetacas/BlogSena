import { usuario } from "../models/usuario.model.js";

export const buscar = async (req, res) => {
  const usuarios = await usuario.findAll();
  res.send({ usuarios });
};

export const crear = async (req, res) => {
  const {  nombre, correo, pass, idrol, foto } = req.body;
  const nuevoUsuario = await usuario.create({

    nombre,
    correo,
    pass,
    idrol,
    foto
  });
  res.send({ nuevoUsuario });
};

export const actualizar = async (req, res) => {
  const { nombre, correo, pass,idrol,foto } = req.body;
  const usuarios = await usuario.findByPk(req.params.id);
  if (usuarios) {
    usuarios.nombre = nombre;
    usuarios.correo = correo;
    usuarios.pass = pass;
    usuarios.idrol = idrol;
    usuarios.foto = foto;

    await usuarios.save();
    res.send("ok");
  } else {
    res.status(400).send("no existe el id");
  }
};

export const eliminar = async (req, res) => {
  const usuarios = await usuario.findByPk(req.params.id);
  if (usuarios) {
    await usuarios.destroy();
    res.send("eliminado !");
  } else {
    res.status(400).send("no existe el id");
  }
};
