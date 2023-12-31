import jwt from "jsonwebtoken";
import {Request, Response} from "express";
import bcrypt from 'bcryptjs';
import { ErrorResponse } from "../../../model/user/schema/index.js";
import { findAllByQuery } from "../../../model/resetToken/dao/index.js";
import { updateByQuery, findAllByQuery as userFindAllByQuery} from "../../../model/user/dao/index.js";
import "../../../loadenv.js";

const SECRET_KEY = process.env.SECRET_KEY as string;
const SECRET_REFRESH_KEY = process.env.SECRET_REFRESH_KEY as string;

const Unit = async (req:Request, res:Response) =>{
    try {
        // get token
        const {token} = req.params;
        if(!token) return res.status(401).json({message: "Invalid token!"});

        jwt.verify(token, SECRET_KEY, async (err, decoded)=>{
            if(err){
                console.log(">>> error at token verify", {err});
                return res.status(401).json({message: "Invalid token!!"});
            }
            console.log('>>>decoded', decoded)
            const {newPassword, reNewPassword} = req.body;


            if(!newPassword) return res.status(400).json({message: "Bad request at request body!"});
            if(newPassword != reNewPassword) return res.status(400).json({message: "Password is not matched"});

            
            //hashed
            const saltRounds = 10;
            const resetPassword = await bcrypt.hash(newPassword, saltRounds);

            // get new username
            const query = {token}
            const resetTokenProfile = await findAllByQuery({query})
            
            console.log(">>> resetTokenProfile", resetTokenProfile);

            // fetch username from token
            const userProfile = resetTokenProfile[0];
            const {username, email} = userProfile;
            const fetchedUserProfile = await userFindAllByQuery({query: {username, email}});

            console.log(">>>fetchUserProfile empty", fetchedUserProfile);
            if(!fetchedUserProfile[0]){
                return res.status(409).json({message: "username or email does is not matched existing"})
            }

            // update password
            const updateBody = {password: resetPassword};
            console.log(">>>updating password by query")
            const responseUpdate = await updateByQuery({query: {username}, update: updateBody});
            console.log(">>>returning responseUpdate", responseUpdate)

            return res.status(200).json({responseUpdate});
        });
    }
    
     catch (error) {
        console.log(">>> error at refreshPostController:", error);
        const errorResponse = error as ErrorResponse;
        const {message} = errorResponse;
        return res.status(500).json({message});
    }

};

export default Unit;

// rbac: admin can find all user, but member can only find self;