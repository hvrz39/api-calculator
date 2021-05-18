'use strict';

import  bcrypt from bcryptjs;
import  { Model} from 'sequelize';
import { v4 } from 'uuid';

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,     
      defaultValue: v4()
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {      
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true
        }
    },
    role: {      
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {      
      type: DataTypes.STRING,
      allowNull: false
    },
    hooks: {
      beforeValidate: () => {},
      afterValidate: async user =>  {
        if(user.password) {
          user.password = await bcrypt.hash(user.password, bcrypt.genSaltSync(8));
        }
      },
      beforeCreate: () => {},
      afterCreate: () => {}
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;  
};