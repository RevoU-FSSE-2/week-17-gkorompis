import {Request, Response} from "express";
import { User } from "../../../model/index.js";
import { ErrorResponse } from "../../../model/user/schema/index.js";

const { createUser } = User;

const Unit = async (req:Request, res:Response) =>{
    try {
        // get query
        const {body} = req;
        const userData = body;

        // post document
        console.log(">>> invoking model User at postController")
        const response = await createUser({userData});
        console.log(">>> response at postController", response);

        if(!response){
            throw new Error("no response from createUser");
        }

        //return response
        return res.status(200).json(response);

    } catch (error) {
        console.log(">>> error at postController:", error);
        const errorResponse = error as ErrorResponse;
        const {message} = errorResponse;
        res.status(500);
        return res.json({message});
    }

};

export default Unit;

// rbac: admin can find all user, but member can only find self;