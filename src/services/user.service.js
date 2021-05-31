
import db from '../models';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 }  from 'uuid';
import config from '../app.config';

export const getAll = async criteria => {   
    return await db.User.findAndCountAll({
        ...criteria
    });   
}

export const createUser = async user => {
    let { username, password, role, status } = user;
    if(!password) {
        password = 'admin';
    }
    const newUser = await db.User.create({
        username,
        password,
        uuid: v4(),
        role,
        status
    });
    return newUser;
}

export const update = async (id, { username, role, status }) => 
    await db.User.update({ 
        username,
        role,
        status
    }, {
        where: {
            id
        }
    });

export const getById = async id => {
    try {
        return  await db.User.findByPk(id, 
                                { include: 
                                    [{ 
                                        model: db.UserBalance                                        
                                    }]});
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
    const access_token = jwt.sign(
        { id, username, role, status }, 
        config.secret, 
        {  expiresIn: 86400 });    

    db.UserToken.create({
        user_id: id,      
        uuid: v4(),
        token: access_token
    });

    return access_token;
}

export const removeToken = async (user_id, token) => {
    db.UserToken.destroy({
        where: {
            user_id,
            token
        }
    });
}

export const remove = async id => 
            await db.User.destroy({
                where: {
                    id
                }
            });


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