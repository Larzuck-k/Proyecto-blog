import { Router } from "express";
import {
  listarpublicacion,
  editarpublicacion,
  crearpublicacion,
  eliminarpublicacion
} from "../controllers/usuario.js";
const publicacion = Router();

usuario.get("/publicacion/listing", listarpublicacion);
usuario.put("/publicacion/edit", editarpublicacion);
usuario.post("/publicacion/create", crearpublicacion);
usuario.delete("/publicacion/delete", eliminarpublicacion);

export default publicacion;
