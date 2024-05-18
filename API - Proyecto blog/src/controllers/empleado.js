import Empleado from "../models/empleado.js";

export const listarempleados = async (req, res) => {
  const empleados = await Empleado.findAll();
  res.send({ empleados });
};

export const crearempleado = async (req, res) => {
  const { nombre, apellidos, fechaNace, nivel } = req.body;
  const nuevoEmpleado = await Empleado.create({
    nombre,
    apellidos,
    fechaNace,
    nivel,
  });
  res.send({ nuevoEmpleado });
};

export const editarempleado = async (req, res) => {
  const { nombre, apellidos, fechaNace, nivel } = req.body;
  const empleado = await Empleado.findByPk(req.query.id);
  if (empleado) {
    empleado.nombre = nombre;
    empleado.apellidos = apellidos;
    empleado.fechaNace = fechaNace;
    empleado.nivel = nivel;
    await empleado.save();
    res.send("ok");
  } else {
    res.status(400).send("no existe el id");
  }
};

export const eliminarempleado = async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  if (empleado) {
    await empleado.destroy();
    res.send("eliminado !");
  } else {
    res.status(400).send("no existe el id");
  }
};
