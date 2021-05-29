import * as recordService from '../services/record.service';


export const getAll = async (req, res) => {
    try {                
        let { sort, offset, limit } = req.query;
        limit = limit ?? 10;
        const perPage = offset ? limit * offset:  0;        
        const records = await recordService.getAll({ 
                    order: [ 
                        [sort ? sort.split(' ') : ['type', 'asc']]
                    ],
                    limit,
                    offset: perPage,
                    // where: { 
                    //     username: {
                    //         [Op.startsWith]: `%@%`
                    //     }
                    // }
                });
        
        res.status(200).json(records);

    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while retrieving Records.'});
    }
 }

 export const getById = async (req, res) => {
    try {                
        const { id } = req.params;       
        const existingRecord = await recordService.getById(id);

        if(!existingRecord) {
            return res.status(404).json({ error: 'Record not found.' });
        }        
        res.status(200).json(existingRecord);
    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while retrieving a Record.'});
    }
 }