import { Router } from "express";
import {
  listarcomentario,
  editarcomentario,
  crearcomentario,
  eliminarcomentario,
  listarporpublicacion
} from "../controllers/comentario.js";
const comentario = Router();

comentario.get("/comentario/listing", listarcomentario);
comentario.get("/comentario/listingpub", listarporpublicacion);
comentario.put("/comentario/edit", editarcomentario);
comentario.post("/comentario/create", crearcomentario);
comentario.delete("/comentario/delete", eliminarcomentario);

export default comentario;
