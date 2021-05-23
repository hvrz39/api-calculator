'use strict';
const {  Model} = require('sequelize');
const uuid = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class UserBalance extends Model {    
    
    static associate(models) {      
      //UserBalance.belongsTo(models.User)
    }

  };
  UserBalance.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uuid: { 
      type: DataTypes.UUID,
      defaultValue: uuid.v4()
    },
    balance: { 
      type: DataTypes.DOUBLE,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'UserBalance',
    paranoid: true    
  });
  return UserBalance;
};