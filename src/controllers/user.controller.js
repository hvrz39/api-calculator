import * as userService from '../services/user.service';
import { Op } from 'sequelize';

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
        const { username, role, uuid, createdAt, updatedAt } = user;        
        res.status(200).json(user);

    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while retrieving a User.'});
    }
 }