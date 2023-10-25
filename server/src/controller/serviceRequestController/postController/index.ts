import {Request, Response} from "express";
import { ServiceRequest } from "../../../model/index.js";
import { ErrorResponse } from "../../../model/serviceRequest/schema/index.js";

const { createServiceRequest } = ServiceRequest;

const Unit = async (req:Request, res:Response) =>{
    try {
        // get query
        const {body} = req;
        const serviceRequestData = body;

        // post document
        console.log(">>> invoking model ServiceRequest at postController")
        const response = await createServiceRequest({serviceRequestData});
        console.log(">>> response at postController", response);

        if(!response){
            throw new Error("no response from createServiceRequest");
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

// rbac: admin can find all serviceRequest, but member can only find self;