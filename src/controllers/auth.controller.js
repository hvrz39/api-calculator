import * as userService from '../services/user.service';

export const signin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userService.searchBy({ username });
        const notFoundErrorMessage = { error: `User not found or incorrect password` };

        if(!user) {
            res.status(404).json(notFoundErrorMessage);

            return;
        }

        const matching = await userService.comparePassword(password, user.password);
        if(!matching) {
            res.status(404).json(notFoundErrorMessage);
            return;
        }
        
        const token = await userService.generateToken(user);
        const { id, role, status } = user;
        res.status(200).json({ 
            id,
            role, 
            status, 
            token 
        });

    } catch(err) {        
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while trying to signing in.'});
    }
 }

 export const signup = async (req, res) => {
    try {
        console.log(params) 
    } catch(err) {
        res.status(500).json({ error: 'An error ocurred while trying to create a User.'});
    }
 }

 export const logout = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id) {
            res.status(400).json({ error: 'No user was found.'})    
        }

        userService.removeToken(id);
        res.status(200).json({ message: 'User logout.'});

    } catch(err) {
        res.status(500).json({ error: 'An error ocurred while trying to logout.'});
    }
 }