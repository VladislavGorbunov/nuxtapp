import { sequelize, db } from '../../lib/db'
import { QueryResult } from 'mysql2'
import Vacancy from '../../models/vacancy'
import Employer from '../../models/employer'

export default defineEventHandler(async (event) => {
    
    Vacancy.belongsTo(Employer, {
        foreignKey: {
            name: 'employer_id'
        },
    });

    const vacancies = await Vacancy.findAll({
        include: [{
            model: Employer,
            // where: { id: 1 }
        }],

        raw: true 
    });
    console.log(vacancies)
    return vacancies
})