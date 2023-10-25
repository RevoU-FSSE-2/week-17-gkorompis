import ServiceRequest, { ServiceRequestDocument, ServiceRequestQuery } from "../../schema/index.js"
import { connectToDatabase } from "../../../../db/index.js";
interface IndexParameter {
    query: ServiceRequestQuery
}

const Unit = async ({query}:IndexParameter) =>{
    try {
        const connection = await connectToDatabase();
        console.log(">>>connecting", typeof connection);
        console.log(">>> find all by query");
        if(!query ){
            console.log("input doesn't have query property");
            throw new Error("input doesn't have query property");
        }

        console.log(">>> invoking ServiceRequest.find");
        const fetched = await ServiceRequest.find(query).exec() as ServiceRequestDocument[];
        if(!fetched || !Array.isArray(fetched) ){
            console.log(">>> collections not found:", fetched);
            throw new Error("collections not found")
        }
        
        console.log(">>> returning collection",typeof fetched);
        return fetched;

    } catch(error){
        console.log(">>> error at findAllByQuery", error);
        throw new Error(JSON.stringify(error));
    }
    
};

export default Unit;