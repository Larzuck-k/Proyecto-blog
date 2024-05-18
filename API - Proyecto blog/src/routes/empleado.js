import { Router } from "express";
import {
  crearempleado,
  editarempleado,
  eliminarempleado,
  listarempleados,
} from "../controllers/empleado.js";
const empleado = Router();

empleado.get("/empleado/listing", listarempleados);
empleado.put("/empleado/edit", editarempleado);
empleado.post("/empleado/create", crearempleado);
empleado.delete("/empleado/delete", eliminarempleado);

export default empleado;
