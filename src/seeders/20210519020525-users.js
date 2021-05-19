'use strict';
var uuid = require('uuid');
const bcrypt = require('bcryptjs');
const  projectConfig = require('../project.config.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Users', [{
      username: 'user1@tester.com',
      uuid: uuid.v4(),
      role: projectConfig.roles.User,
      status: projectConfig.status.Active,
      password: await bcrypt.hash('user1', bcrypt.genSaltSync(8)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'user2@tester.com',
      uuid: uuid.v4(),
      role: projectConfig.roles.User,
      status: projectConfig.status.Active,
      password: await bcrypt.hash('user2', bcrypt.genSaltSync(8)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'user3@tester.com',
      uuid: uuid.v4(),
      role: projectConfig.roles.User,
      status: projectConfig.status.Active,
      password: await bcrypt.hash('user3', bcrypt.genSaltSync(8)),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
