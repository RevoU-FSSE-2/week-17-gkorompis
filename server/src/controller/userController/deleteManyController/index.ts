import {Request, Response} from "express";
import { User } from "../../../model/index.js";
import { ErrorResponse } from "../../../model/user/schema/index.js";

const { deleteManyByQuery} = User;

const Unit = async (req:Request, res:Response) =>{
    try {
        // get query
        const {body} = req;
        const query = body || {};

        // delte document
        console.log(">>> invoking model User at deleteManyController")
        // deleteOneByQuery = cb ? cb : deleteOneByQuery;
        const response = await deleteManyByQuery({query});
        console.log(">>> response at deleteManyController", response);

        if(!response){
            throw new Error("no response from deleteManyByQuery");
        }

        //return response
        return res.status(200).json(response);

    } catch (error) {
        console.log(">>> error at deleteManyController:", error);
        const errorResponse = error as ErrorResponse;
        const {message} = errorResponse;
        res.status(500);
        return res.json({message});
    }

};

export default Unit;

// rbac: admin can find all user, but member can only find self;