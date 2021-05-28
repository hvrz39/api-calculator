
import db from '../models';
import { v4 }  from 'uuid';
import projectConfig from '../project.config.json';

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
        where: {
            id
        }
    });