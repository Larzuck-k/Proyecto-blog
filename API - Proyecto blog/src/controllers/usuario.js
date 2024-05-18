import { where } from "sequelize";
import Usuario from "../models/usuario.js";
import bcrypt, { compare } from "bcrypt";

export const loginusuario = async (req, res) => {
  const { password, email } = req.body;
  let Error = "";
  const usuario = await Usuario.findAll({
    where: {
      email: email,
    },
  });
  console.log(usuario[0].password);
  console.log(password);
  console.log(bcrypt.compareSync(password, usuario[0].password));
  const rowCount = usuario.length;

  if (rowCount == 1) {
    if (bcrypt.compareSync(password, usuario[0].password) == true) {
      res.status(200).send({
        status: "ok",
        mensaje: "Ingreso exitoso",
        user: usuario[0].user,
        email: usuario[0].email,
        photo: usuario[0].photo,
        id: usuario[0].id,
      });
    } else {
      res.status(404).send({
        status: "error",
        mensaje: "Datos incorrectos, verifique e intente de nuevo",
      });
    }
  } else {
    res.status(404).send({
      status: "error",
      mensaje: "Datos incorrectos, verifique e intente de nuevo",
    });
  }
};

export const crearusuario = async (req, res) => {
  let val1 = false;
  let val2 = false;
  let mensaje1 = "";
  let mensaje2 = "";
  const { user, password, email, photo } = req.body;
  //Encriptar contraseña y validar que no se ha utilizado el email
  let salt = 10;
  let Error = "";
  const Validacion1 = await Usuario.findAll({
    where: {
      email: email,
    },
  });

  const rowCount1 = Validacion1.length;

  if (rowCount1 >= 1) {
    val1 = true;
    mensaje1 = "Este correo ya está en uso";
  }
  const validacion2 = await Usuario.findAll({
    where: {
      user: user,
    },
  });

  const rowCount2 = validacion2.length;

  if (rowCount2 >= 1) {
    val2 = true;
    mensaje2 = "Este nombre de usuario ya está en uso";
  }

  if (val1 || val2) {
    if (val1 == true && val2 == false) {
      res.status(404).send({
        status: "error",
        mensaje: mensaje1 + ".",
      });
    }
    if (val2 == true && val1 == false) {
      res.status(404).send({
        status: "error",
        mensaje: mensaje2 + ".",
      });
    }
    if (val1 == true && val2 == true) {
      res.status(404).send({
        status: "error",
        mensaje: mensaje1 + " - " + mensaje2 + ".",
      });
    }
  } else {
    let val = bcrypt.hashSync(password, salt);
    const nuevoUsuario = await Usuario.create({
      photo,
      user,
      password: val,
      email,
    });
    res.status(200).send({
      status: "success",
      mensaje: "Se ha registrado correctamente",
    });
  }
};

export const editarusaurio = async (req, res) => {
  const { user, password, email, photo } = req.body;
  let salt = 10;
  //Encriptar contraseña y validar que no se ha utilizado el email
  const usuario = await Usuario.findByPk(req.query.id);

  if (usuario) {
    try {
      if (password != "") {
        let val = bcrypt.hashSync(password, salt);
        usuario.password = val;
      }
      usuario.photo = photo;
      usuario.user = user;
      usuario.email = email;
      await usuario.save();
      res.status(200).send({
        status: "success",
        mensaje: "Se ha editado el usuario correctamente",
      });
    } catch (error) {
      res.status(404).send({
        status: "Error",
        mensaje:
          "El usuario o correo ya se encuentra en uso, intente con uno diferente.",
      });
    }
  } else {
    res.status(404).send({
      status: "error",
      mensaje: "Ha ocurrido un error inesperado",
    });
  }
};

export const eliminarusuario = async (req, res) => {
  const usuario = await Usuario.findByPk(req.query.id);

  if (usuario) {
    await usuario.destroy();
    res.status(200).send({
      status: "success",
      mensaje: "Se ha eliminado la cuenta correctamente",
    });
  } else {
    res.status(404).send({
      status: "error",
      mensaje: "Ha ocurrido un error inesperado",
    });
  }
};
