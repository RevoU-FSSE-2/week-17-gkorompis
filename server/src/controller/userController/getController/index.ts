import {Request, Response} from "express";
import { User } from "../../../model/index.js";
import { ErrorResponse } from "../../../model/user/schema/index.js";

const { findAllByQuery } = User;

const Unit = async (req:Request, res:Response) =>{
    try {
        // get query
        const {query} = req;

        // fetch collections
        console.log(">>> invoking model User at getController with query:", query);
        const response = await findAllByQuery({query});
        console.log(">>> response at getControllers", typeof response)

        if(!response){
            throw new Error("no response from findAllByQuery");
        }
       
        res.status(200)

        //return response
        return res.json(response);

    } catch (error) {
        console.log(">>> error at getController:", error);
        const errorResponse = error as ErrorResponse;
        const {message} = errorResponse;
        res.status(500);
        return res.json({message});
    }

};

export default Unit;