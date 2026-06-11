'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash('Vadya2011!', salt)
      
    return queryInterface.bulkInsert('admin', [
      {
        email: 'limitorg2016@yandex.ru',
        password: password,
        name: 'Владислав'
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('admin', null, {});
  }
};
