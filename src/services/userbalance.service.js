import db from '../models';

export const getAll = async criteria => {
    return await db.User
                    .findAndCountAll({ ...criteria });
}
export const addUserBalance = async userBalance => {      
    return await db.UserBalance.create(userBalance);
}

export const getUserBalance = async userId => {      
    return await db.UserBalance.findOne({
        limit: 1,
        order: [
            ['id', 'desc'],
        ],
        attributes: ['balance', 'user_id'],
        where: {
            user_id: userId
        }
    });
}