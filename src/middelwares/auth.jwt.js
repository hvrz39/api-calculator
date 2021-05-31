import jwt from 'jsonwebtoken';
import * as userService from '../services/user.service';
import  config from '../app.config';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];            
        if(!token) {
            res.status(403).json("No token provided");
        }    
        const { id, role } = jwt.verify(token, config.secret);                   
        const userToken = await userService.getUserToken(id, token);                
        if(!userToken) {
            res.status(403).json({ error: `User not found, no token found. ${id} ${token}` });
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
        if(role !== 'admin') {
            res.status(401).json({ error: "Unauthorized, only Administrators." });
        }
        next();
    } 
    catch (err) {
        return res.status(500).json({ error: "Unauthorized."});
    }
}

export const isUser = async (req, res, next) => {
    try {        
        const { role } = req;    
        if(role !== 'user') {
            res.status(401).json({ error: "Unauthorized, only Users." });
        }
        next();
    } 
    catch (err) {
        return res.status(500).json({ error: "Unauthorized."});
    }
}