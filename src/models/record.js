'use strict';
const {  Model} = require('sequelize');
const uuid = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Record.belongsToMany(models.User, {
      //   foreignKey: 'user_id'
      // })

      // Record.belongsToMany(models.Service, {
      //   foreignKey: 'service_id'
      // })
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