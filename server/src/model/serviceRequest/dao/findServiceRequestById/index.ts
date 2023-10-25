import ServiceRequest, { ServiceRequestDocument } from "../../schema/index.js"
import { connectToDatabase } from "../../../../db/index.js";
interface IndexParameter {
    query: {
        _id: string
    }
}

const Unit = async ({query}:IndexParameter) =>{
    try {
        const connection = await connectToDatabase();
        console.log(">>>connecting", typeof connection);
        console.log(">>> find by id");
        if(!query || !query["_id"]){
            console.log("query or id can't be empty");
            throw new Error("query or id can't be empty");
        }

        const {_id} = query;
        console.log(">>> invoking ServiceRequest.findById");
        const fetchedServiceRequestById = await ServiceRequest.findById(_id).exec();
        const {requestedBy} = fetchedServiceRequestById as ServiceRequestDocument;
        if(!fetchedServiceRequestById || !requestedBy ){
            console.log(">>> serviceRequest not found");
            throw new Error("serviceRequest not found")
        }
        
        console.log(">>> returning fetched serviceRequest by id", fetchedServiceRequestById);
        return fetchedServiceRequestById;

    } catch(error){
        console.log(">>> error at findServiceRequestById", error);
        throw new Error(JSON.stringify(error));
    }
    
};

export default Unit;