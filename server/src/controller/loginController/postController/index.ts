import jwt from "jsonwebtoken";
import {Request, Response} from "express";
import { ErrorResponse } from "../../../model/user/schema/index.js";
import "../../../loadenv.js";

const SECRET_KEY = process.env.SECRET_KEY as string;
const SECRET_REFRESH_KEY = process.env.SECRET_REFRESH_KEY as string;

const Unit = async (req:Request, res:Response) =>{
    try {
        console.log(">>> /login/auth postController")
        // get body
        const {body} = req;
        if(!body){ res.status(400).json({message: "Bad request at request body."})}
        const loginInfo = body;
        const {username, role} = loginInfo;

        // sign body to jwt;
        const token = jwt.sign(loginInfo, SECRET_KEY, {expiresIn: '600000'});
        const refreshToken = jwt.sign(loginInfo, SECRET_REFRESH_KEY, {expiresIn: '900000'});

        // setting cookies
        res.cookie('sessionToken', token, {sameSite: 'none', secure: true});
        res.cookie('sessionRefreshToken', refreshToken, {sameSite: 'none', secure: true});
        res.cookie('sessionRole', role, {sameSite: 'none', secure: true} );
        res.cookie('sessionUsername', username, {sameSite: 'none', secure: true} );
        console.log(">>>setting cookies at login controller after", req.cookies)
        
        // return token
        const tokens = {
            token,
            refreshToken
        }
        return res.status(200).json(tokens);

    } catch (error) {
        console.log(">>> error at postController:", error);
        const errorResponse = error as ErrorResponse;
        const {message} = errorResponse;
        return res.status(500).json({message});
    }

};

export default Unit;

// rbac: admin can find all user, but member can only find self;