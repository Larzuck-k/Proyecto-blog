import express from "express";


import rutausuario from "./src/routes/usuario.js";
import rutacomentario from "./src/routes/comentario.js";
import rutapublicacion from "./src/routes/publicacion.js";
import cnx from "./src/models/db.js";

import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config({ path: "././.env" });

//creamos el server node
const app = express();
const port = process.env.PORT || 3100;
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

cnx
  .sync({ force: false })
  .then(() => {
    console.log("sincronizacion ok!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(rutacomentario);
app.use(rutausuario);
app.use(rutapublicacion);
app.server = app.listen(port, () => {
  console.log(`Server ejecutandose en ${port}...`);
});

// crud
