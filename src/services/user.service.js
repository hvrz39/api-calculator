
import db from '../models';
import bcrypt, { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import projectConfig from '../project.config.json';

export const getAll = async criteria => {
    return await db.User.findAndCountAll({
        ...criteria
    });
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
    return token;
}
export const comparePassword = async (password, receivedPassword) => await compare(password, receivedPassword);