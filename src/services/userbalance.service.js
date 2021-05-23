import db from '../models';

export const addUserBalance = async userBalance => {   
    return await db.UserBalance.create(userBalance);
}