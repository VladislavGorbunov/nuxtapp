
import { Sequelize, sequelize, DataTypes } from '../lib/db'

const Employer = sequelize.define(
  'Employers',
  {
    // Model attributes are defined here
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    legal_form: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    inn: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    
  },
  {
    tableName: 'employers',
    timestamps: false,
  },
);

export default Employer