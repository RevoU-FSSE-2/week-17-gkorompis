import User, { UserDocument, UserQuery, ErrorResponse } from "../../schema/index.js";
import { connectToDatabase } from "../../../../db/index.js";

interface IndexParameter {
    query: UserQuery
}

const Unit = async ({query}:IndexParameter) =>{
    try {
        const connection = await connectToDatabase();
        console.log(">>>connectinga", typeof connection);
        console.log(">>> find all by query");
        if(!query ){
            console.log("input doesn't have query property");
            throw new Error("input doesn't have query property");
        }

        console.log(">>> invoking User.find. Query:", query);
        const fetched = await User.find(query).exec() as UserDocument[];
        if(!fetched || !Array.isArray(fetched) ){
            console.log(">>> collections not found:", fetched);
            throw new Error("collections not found")
        }
        
        console.log(">>> returning collection", typeof fetched);
        return fetched;

    } catch(error){
        console.log(">>> error at findAllyByQuery", error);
        throw new Error(JSON.stringify(error));
    }
    
};

export default Unit;