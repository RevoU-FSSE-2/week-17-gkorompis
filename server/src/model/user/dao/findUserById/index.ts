import User, { UserDocument } from "../../schema/index.js"
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
        console.log(">>> invoking User.findById");
        const fetchedUserById = await User.findById(_id).exec();
        const {username} = fetchedUserById as UserDocument;
        if(!fetchedUserById || !username ){
            console.log(">>> user not found");
            throw new Error("user not found")
        }
        
        console.log(">>> returning fetched user by id", fetchedUserById);
        return fetchedUserById;

    } catch(error){
        console.log(">>> error at findByUserId", error);
        throw new Error(JSON.stringify(error));
    }
    
};

export default Unit;