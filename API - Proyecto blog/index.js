import express from "express";

import rutaempleado from "./src/routes/empleado.js";
import rutadepartamento from "./src/routes/departamento.js";
import rutausuario from "./src/routes/usuario.js";
import cnx from "./src/models/db.js";

import dotenv from "dotenv";
dotenv.config({ path: "././.env" });

//creamos el server node
const app = express();
const port = process.env.PORT || 3100;
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cnx
  .sync({ force: false })
  .then(() => {
    console.log("sincronizacion ok!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(rutadepartamento);
app.use(rutaempleado);
app.use(rutausuario);
app.server = app.listen(port, () => {
  console.log(`Server ejecutandose en ${port}...`);
});

// crud
