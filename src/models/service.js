'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  Service.init({
    uuid: {
      type: DataTypes.UUID
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: { 
      type: DataTypes.DOUBLE
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Service',
    paranoid: true    
  });
  return Service;
};