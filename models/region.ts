
import { Sequelize, sequelize, DataTypes } from '../lib/db'

const Region = sequelize.define(
  'Regions',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_in: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    slug: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    tableName: 'regions',
    timestamps: false,
  },
);

export default Region