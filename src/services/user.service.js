
import db from '../models';
import bcrypt, { compare } from 'bcryptjs';
import projectConfig from './projectConfig.json';

export const createUser = user => {
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

export const comparePassword = async (password, receivedPassword) => await compare(password, receivedPassword);