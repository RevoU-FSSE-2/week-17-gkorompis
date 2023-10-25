import ServiceRequest from "../../schema/index.js"
import { connectToDatabase } from "../../../../db/index.js";

interface IndexParameter {
    query: {
        _id: string,
        username?: string
    }
}

const Unit = async ({query}:IndexParameter) =>{
    try {
        const connection = await connectToDatabase();
        console.log(">>>connecting", typeof connection);
        console.log(">>> find by id");
        if(!query){
            console.log("query or id can't be empty");
            throw new Error("query or id can't be empty");
        }

        console.log(">>> invoking model", {query}); 
        const response = await ServiceRequest.deleteMany(query);
        console.log(">>> response", response);
        
        if(!response ){
            console.log(">>> query not match");
            throw new Error("query not match")
        }
        
        console.log(">>> returning fetched", response);
        return response;

    } catch(error){
        console.log(">>> error at deleteManyByQuery", error);
        throw new Error(JSON.stringify(error));
    }
    
};

export default Unit;