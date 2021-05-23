import * as userBalanceService from '../services/userbalance.service';

export const addUserBalance = async (req, res) => {
    try {                                
        userBalanceService.addUserBalance(req.body);
        res.status(200).json({ message: ' User balance'});

    } catch(err) {                
        res.status(500).json({ error: 'An error ocurred while retrieving Users.'});
    }
 }