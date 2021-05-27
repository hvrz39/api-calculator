import * as userBalanceService from '../services/userbalance.service';
import db from '../models';

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

        const userBalance = await userBalanceService.getAll({
            order: [ 
                [sort ? sort.split(' ') : ['username', 'desc']]
            ],
            limit,
            offset: perPage,
            attributes: ['username', 'role'],
                        include:  [{
                            // all: true
                            model: db.UserBalance,
                            limit: 1,
                            order: [
                                ['id', 'desc'],
                            ],
                            attributes: ['balance']
                        }] 
        });
        const { rows, count } = userBalance;
        const userBalances = rows.map((r) => {        
            const { id, username, role, UserBalances } = r.dataValues;
            const balance = UserBalances.length > 0 
                            ? UserBalances[0].dataValues.balance
                            : 0;            
            return { id, username, role, balance }
        });
        
        res.status(200).json({ rows: userBalances, count });

    } catch(err) {                
        res.status(500).json({ error: 'An error ocurred while retrieving Users.'});
    }
 }