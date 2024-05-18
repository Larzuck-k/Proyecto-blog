const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../db')

const Departamento= sequelize.define('departamento',{
  
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    produccion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    gerencia:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:true
    },
    ventas:{
        type:DataTypes.BIGINT,
        allowNull:true
    },
    estado:{
        type:DataTypes.BOOLEAN,
        allowNull:true
    }
})

module.exports = Departamento

