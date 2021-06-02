'use strict';
var uuid = require('uuid');
const bcrypt = require('bcryptjs');
const  projectConfig = require('../project.config.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Services', [{     
      uuid: uuid.v4(),
      type: 'addition',
      cost: 10,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {     
      uuid: uuid.v4(),
      type: 'substraction',
      cost: 10,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {     
      uuid: uuid.v4(),
      type: 'division',
      cost: 15,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {     
      uuid: uuid.v4(),
      type: 'multiplication',
      cost: 15,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {     
      uuid: uuid.v4(),
      type: 'free_form',
      cost: 20,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {     
      uuid: uuid.v4(),
      type: 'square_root',
      cost: 20,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {     
      uuid: uuid.v4(),
      type: 'random_string',
      cost: 25,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
 },

 down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Services', null, {});
 }
};
