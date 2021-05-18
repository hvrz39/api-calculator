'use strict';
var uuid = require('uuid');
const bcrypt = require('bcryptjs');
const  projectConfig = require('../project.config.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const hashedPassword = await bcrypt.hash('admin', bcrypt.genSaltSync(8));

     await queryInterface.bulkInsert('Users', [{
      username: 'rzhoraciov@gmail.com',
      uuid: uuid.v4(),
      role: projectConfig.roles.Admin,
      status: projectConfig.status.Active,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
