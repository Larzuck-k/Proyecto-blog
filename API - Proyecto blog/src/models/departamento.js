import { Sequelize, DataTypes } from "sequelize";

import db from "./db.js";

export default db.define("departamento", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  produccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gerencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ventas: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});
