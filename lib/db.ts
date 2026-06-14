import { Sequelize, DataTypes } from 'sequelize';

const host = 'mysql://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + '/' + process.env.DB_DATABASE

const sequelize = new Sequelize(host)

async function db() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


export {sequelize, db, DataTypes}