
import db from '../models';
import { v4 }  from 'uuid';
import projectConfig from '../project.config.json';

export const getAll = async criteria => {   
    return await db.Service.findAndCountAll({
        ...criteria
    });
}


export const create = async service => await db.Service.create(service) ;