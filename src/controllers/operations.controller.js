import * as userBalanceService from '../services/userbalance.service';
import * as services from '../services/service';
import * as recordService from '../services/record.service';
import * as operationService from '../services/operation.service';
import  { v4 } from 'uuid';

export const doOperation = async (req, res) => {
    try {    

        const { userId } = req;
        const userBalance = await userBalanceService.getUserBalance(userId);   
        const balance = userBalance ? userBalance.balance : 0;
        if(balance <=  0) {
            res.status(400).json({ error: `User does not have enough balance (${balance})`}) 
        }
        
        const { serviceType, elements } = req.body;
        const { cost, id: service_id } = await services.getCost(serviceType);
        
        if(cost > balance) {
                res.status(400).json({ error: `Not enough balance. Current balance: ${balance}, Service Cost: ${cost}`}) 
        }

        const result = operationService.doOperation({ type: serviceType, elements });
        const user_balance = balance - cost;
        const aa = await userBalanceService.addUserBalance({ user_id: userId, balance: user_balance });
        const service_response = `This is the result: ${result}, currentBalance: ${user_balance}`;

        await recordService.create({
                uuid: v4(),
                service_id,
                user_id: userId,
                cost,
                user_balance,
                service_response,
                date: new Date()
        });
       
        res.status(201).json({ message: service_response });
    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while trying to do Operation.'});
    }
 }