
import { Sequelize, sequelize, DataTypes } from '../lib/db'

const Vacancy = sequelize.define(
  'Vacancies',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_salary: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    max_salary: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    employer_id: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    tableName: 'vacancies',
    timestamps: false,
  },
);

export default Vacancy