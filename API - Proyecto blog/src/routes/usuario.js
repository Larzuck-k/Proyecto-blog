import { Router } from "express";
import {
  
  loginusuario,
  editarusaurio,
  crearusuario,
  eliminarusuario
} from "../controllers/usuario.js";
const usuario = Router();


usuario.get("/usuario/login", loginusuario);
usuario.put("/usuario/edit", editarusaurio);
usuario.post("/usuario/create", crearusuario);
usuario.delete("/usuario/delete", eliminarusuario);

export default usuario;
