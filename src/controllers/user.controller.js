import * as userService from '../services/user.service';

export const getAll = async (req, res) => {
    try {
        
        const users = await userService.getAll();
        
        res.status(200).json(users);

    } catch(err) {
        
        console.log(err);

        res.status(500).json({ error: 'An error ocurred while retrieving Users.'});
    }
 }