import { DeleteButton } from "..";
import {Dispatch, SetStateAction, useState, useEffect} from 'react';
import { Button } from "@mui/material";
import axios from 'axios';
import "./index.css";
const baseUrl = "https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev" || "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev";
/************************************* TYPING */ 
interface ServiceRequestDocument {
    _id: string,
    requestedBy: string,
    status: string,
    requestedServices: string[],
    createdTime: string,
    updatedTime: string
}
interface Props {
    documents: ServiceRequestDocument,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    role: string

}
/************************************* VARIABLES */ 
const reformatDate = (inputDate:string) => {
    // Input date string
    var dateString = inputDate || "2023-09-01T20:37:28.651Z";

    // Create a Date object from the input string
    var date = new Date(dateString);

    // Get the individual date and time components
    var year = date.getFullYear().toString().slice(-2); 
    var month = String(date.getMonth() + 1).padStart(2, "0"); 
    var day = String(date.getDate()).padStart(2, "0"); 
    var hours = String(date.getUTCHours()).padStart(2, "0"); 
    var minutes = String(date.getUTCMinutes()).padStart(2, "0"); 

    // Create the formatted date string
    var formattedDate = day + "-" + month + "-" + year + " " + hours + ":" + minutes;
    console.log(formattedDate); // Output: "01-09-23 20:37"
    return formattedDate
};

const patchApprove = async (id:string, setIsLoading: Dispatch<SetStateAction<boolean>>) =>{
    setIsLoading(true);
    const updateValue = {
        status:"approved"
    }
    const response = await axios.put(`${baseUrl}/serviceRequest/one/${id}`, updateValue, {withCredentials: true})
    setIsLoading(false)
    console.log("patchApprove response", response);
}
const deleteServiceRequest = async (id:string, setIsLoading: Dispatch<SetStateAction<boolean>>) =>{
    setIsLoading(true);
    console.log('>>>deleting', id);
    const response = await axios.delete(`${baseUrl}/serviceRequest/one/${id}`, {withCredentials: true})
    setIsLoading(false);
    console.log("deleteRoute response", response);
}

/************************************* COMPONENT */ 
const RequestCard = ({documents, setIsLoading, role}: Props) =>{
    const sessionRole = role
    const {requestedBy, requestedServices, _id, createdTime, updatedTime, status} = documents;
    const formattedCreatedTime = reformatDate(createdTime);
    const formattedUpdatedTime = reformatDate(updatedTime);

    // console.log(">>>cookies set", cookies); 
    // if(cookies){console.log(cookies.split(";"))}
    useEffect(()=>{
        const cookieString = document.cookie;
    }, []);
    console.log()
    return (
        <div className="placeholder">
            <div className="request-cards cards">
                <div>
                    <h3>{_id}</h3>
                    <p>requestedBy: {requestedBy}</p>
                    <p>requestedService: {requestedServices ? requestedServices.join() : "-"}</p>
                    <p>status: {status}</p>
                    <p>createdTime: {formattedCreatedTime}</p>
                    <p>updatedTime: {formattedUpdatedTime}</p>
                </div>
                <div className="placeholder-edit-button">
                    {sessionRole == 'admin' || sessionRole == 'officer' ? <Button variant="contained" size="small" color="info" onClick={()=>{patchApprove(_id, setIsLoading)}}> Approve </Button> : "" }
                    {sessionRole == 'admin' ? <DeleteButton onClick={()=>{deleteServiceRequest(_id, setIsLoading)}}/> : "" }
                </div>
                
            </div>
            
        </div>
        
    )
};
export default RequestCard;