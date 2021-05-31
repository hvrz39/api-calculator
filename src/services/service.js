
import db from '../models';

export const getAll = async criteria => 
                            await db.Service.findAndCountAll({
                                                ...criteria
                                            });


export const create = async service => await db.Service.create(service) ;

export const getById = async id => await db.Service.findByPk(id);

export const update = async (id, { type, cost, status }) => 
    await db.Service.update({ 
            type,
            cost,
            status
        }, {
            where: { id }
        });

export const remove = async id => 
    await db.Service.destroy({
        where: {
            id
        }
    });

    export const getCost = async type => await db.Service.findOne({ 
        where: { type },
        attributes: ['id', 'cost']
    });