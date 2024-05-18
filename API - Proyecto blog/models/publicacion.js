const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../db')

const Departamento= sequelize.define('publicacion', {
  idPublicacion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  photo: {
    type: DataTypes.STRING(5000)
  },
  titulo: {
    type: DataTypes.STRING(200)
  },
  
  contenido: {
    type: DataTypes.STRING(5000)
  }
});
module.exports = Publicacion

