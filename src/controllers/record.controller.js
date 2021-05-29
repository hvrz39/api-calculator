import * as recordService from '../services/record.service';
import db from '../models';

export const getAll = async (req, res) => {
    try {                
        let { sort, offset, limit } = req.query;
        limit = limit ?? 10;
        const perPage = offset ? limit * offset:  0;             
        
        const criteria = {                      
            raw: true,
            order: [ 
                [sort ? sort.split(' ') : ['service_id', 'asc']]
            ],
            limit,
            offset: perPage,
            attributes: ['id', 'uuid', 'cost', 'user_balance', 'service_response', 'Service.type', 'User.username'],
            include: [
                {
                    model: db.User,
                    require: true,
                    attributes: ['username']
                },{ 
                    model: db.Service,
                    require: true,
                    attributes: ['type']
                }] 
        }
        const records = await recordService.getAll(criteria);       
        res.status(200).json(records);

    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while retrieving Records.'});
    }
 }

 export const getById = async (req, res) => {
    try {                
        const { id } = req.params;       
        const existingRecord = await recordService.getById(id);

        if(!existingRecord) {
            return res.status(404).json({ error: 'Record not found.' });
        }        
        res.status(200).json(existingRecord);
    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while retrieving a Record.'});
    }
 }

 export const update = async (req, res) => {
    try {                
        const { id } = req.params;       
        const existingRecord = await recordService.getById(id);

        if(!existingRecord) {
            return res.status(404).json({ error: 'Record not found.' });
        }     
        
        const response = await recordService.update(id, req.body);
        res.status(200).json(response);

    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while uddating a Record.'});
    }
 }

 export const remove = async (req, res) => {
    try {  
        console.log('params', req.params)              
        const { id } = req.params;       
        const existingRecord = await recordService.getById(id);

        if(!existingRecord) {
            return res.status(404).json({ error: 'Record not found.' });
        }        

        await recordService.remove(id);
        res.status(200).json(id);
    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while deleting a Record.', err});
    }
 }