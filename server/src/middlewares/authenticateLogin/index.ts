import {Request, Response, NextFunction} from 'express';
import bcrypt from 'bcryptjs';
import { findAllByQuery } from '../../model/user/dao/index.js';
import { UserDocument } from '../../model/user/schema/index.js';

const Unit = async (req:Request, res: Response, next:NextFunction) =>{
    try {
        // get body
        const {body} = req;
        if(!body){return res.status(400).json({message: "Bad request at request body!"})};

        // check whether username exist
        const {username, password} = body;
        const query = {username};
        const fetchedUser = await findAllByQuery({query}) as unknown as UserDocument[];
        if(!fetchedUser || !fetchedUser[0]){
            console.log(">>> invalid login info at authenticateLogin mwares", typeof fetchedUser)
            return res.status(401).json({message: "Invalid login info!"});
        }

        //check whether password == password
        const passLogin = password;
        const passHashed = fetchedUser[0].password;
        const isMatched = await  bcrypt.compare(passLogin, passHashed) as boolean;

        console.log(">>>isMatched", isMatched);
        if(!isMatched){return res.status(401).json({message: "Invalid login info!"})}

        //manipulate body
        const {role} = fetchedUser[0];
        const userProfile = {username, role};
        req.body = userProfile;

        //return response
        next();
        
    } catch (err) {
        return res.status(500).json({message: "Internal Server Error"});
    }
    
}

export default Unit;