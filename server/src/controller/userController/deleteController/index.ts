import {Request, Response} from "express";
import { User } from "../../../model/index.js";
import { ErrorResponse } from "../../../model/user/schema/index.js";

const { deleteOneByQuery} = User;

const Unit = async (req:Request, res:Response) =>{
    try {
        // get query
        const {params} = req;
        const reqQuery = req.query;
        const {id} = params;
        const query = {
            ...reqQuery,
            _id: id || ""
        }

        // delte document
        console.log(">>> invoking model User at deleteController", query)
        // deleteOneByQuery = cb ? cb : deleteOneByQuery;
        const response = await deleteOneByQuery({query});
        console.log(">>> response at deleteController", response);

        if(!response){
            throw new Error("no response from deleteOneByQuery");
        }

        //return response
        return res.status(200).json(response);

    } catch (error) {
        console.log(">>> error at deleteController:", error);
        const errorResponse = error as ErrorResponse;
        const {message} = errorResponse;
        res.status(500);
        return res.json({message});
    }

};

export default Unit;

// rbac: admin can find all user, but member can only find self;