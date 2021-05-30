import db from '../models';

export const getAll = async criteria => 
                            await db.Record.findAndCountAll({
                                                ...criteria
                                            });


export const getById = async id => await db.Record.findByPk(id, {
    raw: true,
    attributes: [
        'id', 
        'uuid', 
        'cost', 
        'user_id', 
        'service_id', 
        'user_balance', 
        'service_response', 
        'Service.type', 
        'User.username'],
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
 });

export const update = async (id, { service_id, user_id, cost }) => 
    await db.Record.update({ 
        service_id,
        user_id,
        cost
    }, {
        where: {
            id
        }
    });

export const remove = async id => 
    await db.Record.destroy({
        where: {
            id
        }
    });
