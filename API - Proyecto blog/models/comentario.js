const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../db");

const Comentario = sequelize.define("comentario", {
  idComentario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Comentario: {
    type: DataTypes.STRING(1000),
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: "idUsuario",
    },
  },
  
  idPublicacion: {
    type: DataTypes.INTEGER,
  },
});
module.exports = Comentario;
