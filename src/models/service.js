'use strict';
const { Model } = require('sequelize');
const uuid = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    
    static associate(models) {
      // define association here
      Service.hasMany(models.Record, {
        foreignKey: 'service_id'
      })
    }
  };
  Service.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: uuid.v4()
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