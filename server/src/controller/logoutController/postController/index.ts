
import {Request, Response} from "express";
import { ErrorResponse } from "../../../model/user/schema/index.js";
import "../../../loadenv.js";
import { CookieOptions } from "express";

const SECRET_KEY = process.env.SECRET_KEY as string;



const Unit = async (req:Request, res:Response) =>{
    try {
        console.log(">>> /logout postController")

        //set cookies expired
        res.cookie('sessionLogout', "success", {sameSite: 'none', secure: true});
        res.cookie('sessionUsername', "expired", {sameSite: 'none', secure: true, expires: new Date(1)});
        res.cookie('sessionRole', "expired", {sameSite: 'none', secure: true, expires: new Date(1)});
        res.cookie('sessionToken', "expired", {sameSite: 'none', secure: true, expires: new Date(1)});
        res.cookie('sessionRefreshToken', "expired", {sameSite: 'none', secure: true, expires: new Date(1)});

        return res.status(200).json({message: ">>> /logout postController 200"});

    } catch (error) {
        console.log(">>> error at postController:", error);
        const errorResponse = error as ErrorResponse;
        const {message} = errorResponse;
        return res.status(500).json({message});
    }

};

export default Unit;