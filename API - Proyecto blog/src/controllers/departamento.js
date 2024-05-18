import Departamento from "../models/departamento.js";

export const listardepartamentos = async (req, res) => {
  const departamentos = await Departamento.findAll();
  res.send({ departamentos });
};

export const creardepartamento = async (req, res) => {
  const { nombre, produccion, gerencia, descripcion, ventas, estado } =
    req.body;
  const nuevoDepartamento = await Departamento.create({
    nombre,
    produccion,
    gerencia,
    descripcion,
    ventas,
    estado,
  });
  res.send({ nuevoDepartamento });
};

export const editardepartamento = async (req, res) => {
  const { nombre, produccion, gerencia, descripcion, ventas, estado } =
    req.body;
  const departamento = await Departamento.findByPk(req.query.id);

  if (departamento) {
    departamento.nombre = nombre;
    departamento.produccion = produccion;
    departamento.gerencia = gerencia;
    departamento.descripcion = descripcion;
    departamento.ventas = ventas;
    departamento.estado = estado;
    await departamento.save();
    res.send("ok");
  } else {
    res.status(400).send("no existe el id");
  }
};

export const eliminardepartamento = async (req, res) => {
  const departamento = await Departamento.findByPk(req.query.id);
  if (departamento) {
    await departamento.destroy();
    res.send("eliminado !");
  } else {
    res.status(400).send("no existe el id");
  }
};
