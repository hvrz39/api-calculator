'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserToken.belongsTo(models.User)
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