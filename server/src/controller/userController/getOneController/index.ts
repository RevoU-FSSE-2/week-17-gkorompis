import  {Request, Response} from "express";
import { User } from "../../../model/index.js";
import { ErrorResponse } from "../../../model/user/schema/index.js";

const { findAllByQuery } = User;

const Unit = async (req:Request, res:Response) =>{
    try {
        // get query
        const {params}= req;
        const reqQuery = req.query;
        const {id} = params;
        const query = {
            ...reqQuery,
            _id: id
        }

        // fetch collections
        console.log(">>> invoking model User at getOneController:", query)
        const response = await findAllByQuery({query});
        console.log(">>> response at getOneController", response)

        if(!response){
            throw new Error("no response from findAllByQuery");
        }

        //return response
        return res.status(200).json(response);

    } catch (error) {
        console.log(">>> error at getOneController:", error);
        const errorResponse = error as ErrorResponse;
        const {message} = errorResponse;
        res.status(500);
        return res.json({message});
    }

};

export default Unit;

// rbac: admin can find all user, but member can only find self;