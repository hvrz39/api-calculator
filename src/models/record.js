'use strict';
const {  Model} = require('sequelize');
const uuid = require('uuid');
import db from './';
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    
    static associate(models) {      
      Record.belongsTo(models.User, {
        foreignKey: 'user_id'
      })

      Record.belongsTo(models.Service, {
        foreignKey: 'service_id'
      })
    }
  };
  Record.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: uuid.v4()
    },
    service_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    cost: { 
      type: DataTypes.DOUBLE
    },
    user_balance: {
      type: DataTypes.DOUBLE,
      allowNull: null
    },
    service_response: DataTypes.STRING,
    date: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Record',
    paranoid: true
  });
  return Record;
};