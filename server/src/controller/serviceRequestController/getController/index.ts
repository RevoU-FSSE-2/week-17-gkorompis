import {Request, Response} from "express";
import { ServiceRequest } from "../../../model/index.js";
import { ErrorResponse } from "../../../model/serviceRequest/schema/index.js";

const { findAllByQuery } = ServiceRequest;

const Unit = async (req:Request, res:Response) =>{
    try {
        // get query
        const reqQuery = req.query;
        const query = {
            ...reqQuery
        }

        // fetch collections
        console.log(">>> invoking model ServiceRequest at getController", query);
        const response = await findAllByQuery({query});
        console.log(">>> response at getController", typeof response);

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