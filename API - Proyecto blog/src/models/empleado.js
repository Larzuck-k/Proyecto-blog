import { Sequelize, DataTypes } from "sequelize";

import db from "./db.js";

export default db.define("empleado", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaNace: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  nivel: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
