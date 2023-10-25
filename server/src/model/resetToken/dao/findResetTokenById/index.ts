import ResetToken, {ResetTokenDocument} from "../../schema/index.js"
import { connectToDatabase } from "../../../../db/index.js";

interface IndexParameter {
    query: {
        _id: string
    }
}

const Unit = async ({query}:IndexParameter) =>{
    try {
        const connection = await connectToDatabase();
        console.log(">>>connecting", connection);
        console.log(">>> find by id");
        if(!query || !query["_id"]){
            console.log("query or id can't be empty");
            throw new Error("query or id can't be empty");
        }

        const {_id} = query;
        console.log(">>> invoking ResetToken.findById");
        const fetchedResetTokenById = await ResetToken.findById(_id).exec();
        const {username} = fetchedResetTokenById as ResetTokenDocument;
        if(!fetchedResetTokenById || !username ){
            console.log(">>> serviceRequest not found");
            throw new Error("serviceRequest not found")
        }
        
        console.log(">>> returning fetched serviceRequest by id", fetchedResetTokenById);
        return fetchedResetTokenById;

    } catch(error){
        console.log(">>> error at findResetTokenById", error);
        throw new Error(JSON.stringify(error));
    }
    
};

export default Unit;