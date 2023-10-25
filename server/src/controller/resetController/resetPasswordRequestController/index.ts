import jwt from "jsonwebtoken";
import {Request, Response} from "express";
import { ErrorResponse } from "../../../model/user/schema/index.js";
import { ResetToken } from "../../../model/index.js";
import sendEmail from "../../../utils/nodemailerConfig.js";
import "../../../loadenv.js";

const SECRET_KEY = process.env.SECRET_KEY as string;
const PUBLIC_URL = process.env.BASE_URL as string;
// const SECRET_REFRESH_KEY = process.env.SECRET_REFRESH_KEY as string;

const {
    createResetToken
} = ResetToken

const Unit = async (req:Request, res:Response) =>{
    try {
        //body
        const {body} = req;
        const {username, email} = body;
        console.log(">>>request body", {username, email})

        //check localhost
        const { query } = req;
        const { port } = query;
        const BASE_URL = port ? `http://localhost:${port}` : PUBLIC_URL;

        //create token
        const requestToken = jwt.sign(body, SECRET_KEY, {expiresIn: '1m'});
        console.log(">>> requestToken", requestToken);

        const resetTokenData = {
            ...body,
            token: requestToken
        }
    
        //associate with user and store in database
        const response = await createResetToken({resetTokenData});
        console.log(">>> response at resetPassworeRequestController", response);

        //send reset link http://my-app/reset-password/:token
        console.log(">>>sending email")
        const responseEmail = await sendEmail("grkorompis@gmail.com")
        // console.log(">>>sending email response", responseEmail);

        const resetLink = `${BASE_URL}/resetToken/password/token/${requestToken}`


        return res.status(200).json({resetLink});

    } catch (error) {
        console.log(">>> error at requestTokenController:", error);
        const errorResponse = error as ErrorResponse;
        const {message} = errorResponse;
        return res.status(500).json({message});
    }

};

export default Unit;

// rbac: admin can find all user, but member can only find self;