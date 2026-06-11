
import { Sequelize, sequelize, DataTypes } from '../lib/db'

const User = sequelize.define(
  'Admin',
  {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    tableName: 'admin',
    timestamps: false,
  },
);

export default User