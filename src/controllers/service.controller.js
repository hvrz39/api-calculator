import * as service from '../services/service';
import { Op } from 'sequelize';

export const getAll = async (req, res) => {
    try {                
        let { sort, offset, limit } = req.query;
        limit = limit ?? 10;
        const perPage = offset ? limit * offset:  0;        
        const users = await service.getAll({ 
                    order: [ 
                        [sort ? sort.split(' ') : ['type', 'asc']]
                    ],
                    limit,
                    offset: perPage,
                    // where: { 
                    //     username: {
                    //         [Op.startsWith]: `%@%`
                    //     }
                    // }
                });
        
        res.status(200).json(users);

    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while retrieving Users.'});
    }
 }

 export const create = async (req, res) => {
    try {             
        const newService = await service.create(req.body);        
        res.status(201).json(newService);
    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while trying to create a Service.'});
    }
 }

 export const getById = async (req, res) => {
    try {                
        const { id } = req.params;       
        const existingService = await service.getById(id);

        if(!existingService) {
            return res.status(404).json({ error: 'Service not found.' });
        }        
        res.status(200).json(existingService);
    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while retrieving a Service.'});
    }
 }