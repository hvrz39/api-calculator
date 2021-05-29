import db from '../models';

export const getAll = async criteria => 
                            await db.Record.findAndCountAll({
                                                ...criteria
                                            });


export const getById = async id => await db.Record.findByPk(id);