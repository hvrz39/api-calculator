import * as userBalanceService from '../services/userbalance.service';
import db from '../models';
import { orderArray } from '../common/utils';

export const addUserBalance = async (req, res) => {
    try {                                
        userBalanceService.addUserBalance(req.body);
        res.status(200).json({ message: ' User balance'});

    } catch(err) {                
        res.status(500).json({ error: 'An error ocurred while retrieving Users.'});
    }
 }

 export const getUserBalance = async (req, res) => {
     try {
        const { id } = req.params;
        const userBalance = await userBalanceService.getUserBalance(id);
        res.status(200).json(userBalance ?? { user_id: id, balance: 0 });
     }
     catch(err) {
         res.status(500).json({ error: 'not able to retrieve user balance'})
     }
 }

 export const getAllUserBalance = async (req, res) => {
    try {                              
        let { sort, offset, limit } = req.query;
        limit = limit ?? 10;
        const perPage = offset ? limit * offset:  0; 

        sort = sort ? sort.split(' ') : ['username', 'desc'];
        const userBalance = await userBalanceService.getAll({            
            limit,
            offset: perPage,
            attributes: ['username', 'role'],
            // gets the last user balance
            include:  [{                            
                model: db.UserBalance,
                limit: 1,
                order: [
                    ['id', 'desc'],
                ],
                attributes: ['balance']
            }] 
        });
       
        const { rows, count } = userBalance;
        const userBalances = fixUserBalance(rows);
        res.status(200).json({ rows: orderArray(userBalances, sort[0], sort[1]), count });

    } catch(err) { 
        console.log(err)               
        res.status(500).json({ error: 'An error ocurred while retrieving Users.'});
    }
 }

 export const create = async (req, res) => {
    try {                              
        const userBalance = userBalanceService.addUserBalance(req.body);
        res.status(201).json(userBalance);

    } catch(err) {                
        res.status(500).json({ error: 'An error ocurred while retrieving Users.'});
    }
 }

 const fixUserBalance = rows => rows.map((r) => {        
    const { id, username, role, UserBalances } = r.dataValues;
    const balance = UserBalances.length > 0 
                    ? UserBalances[0].dataValues.balance
                    : 0;            
    return { id, username, role, balance }
});