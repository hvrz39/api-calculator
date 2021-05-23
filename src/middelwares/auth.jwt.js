import jwt from 'jsonwebtoken';
import * as userService from '../services/user.service';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];            
        if(!token) {
            res.status(403).json("No token provided");
        }    

        const { id, role } = jwt.verify(token, 'SECRET');                   
        const userToken = await userService.getUserToken(id, token);                
        if(!userToken) {
            res.status(403).json({ error: "User not found." });
        }    

        req.userId = id;
        req.role = role;    
        next();
    } 
    catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Unauthorized."});
    }
}

export const isAdmin = async (req, res, next) => {
    try {        
        const { role } = req;    
        console.log('role', role);
        next();
    } 
    catch (err) {
        return res.status(500).json({ error: "Unauthorized."});
    }
}