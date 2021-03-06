'use strict';

const  bcrypt = require('bcryptjs');
import  { Model} from 'sequelize';
var uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    
    static associate(models) {
      // define association here
      User.hasMany(models.UserToken, {      
        foreignKey: 'user_id',
     });

     User.hasMany(models.UserBalance, {      
      foreignKey: 'user_id'
     })
    }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    uuid: {
      type: DataTypes.UUID,     
      defaultValue: uuid.v4()
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
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      // beforeValidate: () => {},
      afterValidate: async user =>  {        
        if(user.password) {          
          user.password = await bcrypt.hash(user.password, bcrypt.genSaltSync(8));
        }
      }      
    },
  });
  
  return User;  
};