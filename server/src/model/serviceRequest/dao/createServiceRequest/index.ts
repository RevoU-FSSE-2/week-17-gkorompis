
import ServiceRequest, { ErrorResponse } from "../../schema/index.js"
import { ServiceRequestDocument } from "../../schema/index.js";
import { connectToDatabase } from "../../../../db/index.js";
interface IndexParameter {
    serviceRequestData: ServiceRequestDocument
}

const Unit = async ({serviceRequestData}: IndexParameter) =>{
    try {
        const connection = await connectToDatabase();
        console.log(">>>connecting", typeof connection);
        if(!serviceRequestData){
            console.log(">>> serviceRequestData can't be empty");
            throw new Error("serviceRequestData can't be empty");
        }
        console.log('>>> new serviceRequest');
        const newServiceRequest = new ServiceRequest(serviceRequestData);

        console.log(">>> returning new serviceRequest", newServiceRequest);
        return newServiceRequest.save();

    } catch(error){
        console.log(">>> error at createServiceRequest", error);
        throw new Error(JSON.stringify(error));
    }
    
};

export default Unit;