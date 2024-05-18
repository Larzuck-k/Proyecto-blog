import { Router } from "express";
import {
  creardepartamento,
  editardepartamento,
  eliminardepartamento,
  listardepartamentos,
} from "../controllers/departamento.js";
const departamento = Router();

departamento.get("/departamento/listing", listardepartamentos);
departamento.put("/departamento/edit", editardepartamento);
departamento.post("/departamento/create", creardepartamento);
departamento.delete("/departamento/delete", eliminardepartamento);

export default departamento;
