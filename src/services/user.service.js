
import db from '../models';
import bcrypt, { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 }  from 'uuid';
import projectConfig from '../project.config.json';

export const getAll = async criteria => {   
    return await db.User.findAndCountAll({
        ...criteria
    });
    // return await db.User
    //                 .findAndCountAll({ 
    //                     include:  [{
    //                         // all: true
    //                         model: db.UserToken,
    //                         limit: 1,
    //                         order: [
    //                             ['id', 'desc']
    //                         ],
    //                         attributes: ['token']
    //                     }] 
    //                 });
}

export const createUser = async user => {
    const { username, password, role, status } = user;
    const newUser = await db.User.create({
        username,
        password,
        uuid: v4(),
        role,
        status
    });
    return newUser;
}

export const getById = async id => {
    try {
        return  await db.User.findByPk(id);
   } catch(err) {
       throw('An error ocurred while retrieving a user');
   }
}

export const searchBy = async criteria => {
    try {
        return await db.User.findOne({ where: criteria })
    }
    catch (err) {
        console.log(err);
        throw('An error ocurred while retrieving a user');
    }
}

export const generateToken = async user => {
    const { id, username, role, status } = user;
    const token = jwt.sign(
        { id, username, role, status }, 
        "SECRET", 
        {  expiresIn: 86400 });    

    db.UserToken.create({
        user_id: id,      
        uuid: v4(),
        token
    });

    return token;
}

export const removeToken = async (user_id, token) => {
    db.UserToken.destroy({
        where: {
            user_id,
            token
        }
    });
}

export const getUserToken = async (userId, token)  => {
    try {
        return await db.UserToken.findOne({ where: { user_id: userId, token } })
    }
    catch (err) {
        console.log(err);
        throw('An error ocurred while retrieving a user');
    }
}

export const comparePassword = async (password, receivedPassword) => await compare(password, receivedPassword);