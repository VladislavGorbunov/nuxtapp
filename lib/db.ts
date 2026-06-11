import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('mysql://root:root@localhost:3306/nuxt')

async function db() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


export {sequelize, db, DataTypes}