import * as userService from '../services/user.service';
import projectConfig from '../project.config.json'

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
        
        const access_token = await userService.generateToken(user);
        const { id, role, status } = user;        
        res.status(200).json({ 
            id,
            role, 
            status, 
            username,
            access_token,
            expiresIn: 86400 ,
            menuSettings: projectConfig.menuSettings.filter(s=> s.roles.indexOf(role) >= 0).map(({ path, name  }) => ({ menu: path, name }))
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
        const { userId } = req.params;
        const { token } = req.body;
        if(!userId || !token) {
            res.status(400).json({ error: 'No user or a token were not found.'})    
        }

        userService.removeToken(userId, token);
        res.status(200).json({ message: 'User ended session.'});

    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'An error ocurred while trying to logout.'});
    }
 }