'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserToken extends Model {
    static associate(models) {   
      //UserToken.belongsTo(models.User)
    }
  };
  UserToken.init({
    user_id: {
      type:DataTypes.INTEGER,      
    },
    uuid: DataTypes.UUID,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserToken',
    paranoid: true
  });
  return UserToken;
};