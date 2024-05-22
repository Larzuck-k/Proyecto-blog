import { Router } from "express";
import Multer from "multer";

import {
  
  loginUsuario,
  editarUsaurio,
  crearUsuario,
  eliminarUsuario
} from "../controllers/usuario.js";
const usuario = Router();
const upload = Multer({ dest: 'uploads/'
}); 

usuario.get("/usuario/login", loginUsuario);
usuario.put("/usuario/edit", editarUsaurio);
usuario.post("/usuario/create", crearUsuario);
usuario.delete("/usuario/delete", eliminarUsuario);


export default usuario;
