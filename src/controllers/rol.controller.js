import { rol } from "../models/rol.model.js";

export const buscar = async (req, res) => {
  const roles = await rol.findAll();
  res.send({ roles });
};

export const crear = async (req, res) => {
  const {tipoRol} = req.body;
  const nuevoRol = await rol.create({
    tipoRol
  });
  res.send({ nuevoRol });
};


export const eliminar = async (req, res) => {
  const roles = await rol.findByPk(req.params.id);
  if (roles) {
    await rol.destroy();
    res.send("eliminado !");
  } else {
    res.status(400).send("no existe el id");
  }
};
