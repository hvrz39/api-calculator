import * as userService from '../services/user.service';
import { Op } from 'sequelize';
import db from '../models';

export const getAll = async (req, res) => {
    try {                
        let { sort, offset, limit } = req.query;
        limit = limit ?? 10;
        const perPage = offset ? limit * offset:  0;        
        const users = await userService.getAll({ 
                    order: [ 
                        [sort ? sort.split(' ') : ['username', 'asc']]
                    ],
                    limit,
                    offset: perPage,
                    where: { 
                        username: {
                            [Op.startsWith]: `%@%`
                        }
                    }
                });
        
        res.status(200).json(users);

    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while retrieving Users.'});
    }
 }

 export const getById = async (req, res) => {
    try {                
        const { id } = req.params;       
        const user = await userService.getById(id);
        if(!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // const { username, role, uuid, createdAt, updatedAt } = user;        
        res.status(200).json(user);

    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while retrieving a User.'});
    }
 }

 export const create = async (req, res) => {
    try {      
        console.log('payload', req.body)  
        const user = await userService.createUser(req.body);        
        res.status(201).json(user);
    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while trying to signing in.'});
    }
 }

 export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const notFoundMessage = `User not found.`;
        if(!id) {
            res.status(404).json({ error: notFoundMessage });
        }

        const existingUser = userService.getById(id);
        if(!existingUser) {
            res.status(404).json({ error: notFoundMessage });
        }

        const response = await userService.update(id, req.body);
        res.status(200).json(response);
    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: e`An error ocurred while trying to update an User.` })
    }
 }

 export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const notFoundMessage = `User not found.`;
        if(!id) {
            res.status(404).json({ error: notFoundMessage });
        }

        const existingUser = userService.getById(id);
        if(!existingUser) {
            res.status(404).json({ error: notFoundMessage });
        }
        
        await userService.remove(id);
        res.status(200).json(id);
        
    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: e`An error ocurred while trying to update an User.` })
    }
 }