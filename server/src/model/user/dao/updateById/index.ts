import User, { UserQuery } from "../../schema/index.js"
import { connectToDatabase } from "../../../../db/index.js"

interface IndexParameter {
    query: {
        _id: string,
        username?: string
    },
    update: UserQuery
}

const Unit = async ({query, update}:IndexParameter) =>{
    try {
        const connection = await connectToDatabase();
        console.log(">>>connecting", typeof connection);
        console.log(">>> find by id");
        if(!query || !query["_id"]){
            console.log("query or id can't be empty");
            throw new Error("query or id can't be empty");
        }

    
        console.log(">>> invoking User.updateOne");
        console.log(">>> query", query);
        console.log(">>> update", update);
        const setUpdate = update || {};
        const response = await User.updateOne(query, {$set:setUpdate} );
        console.log(">>> response", response);
        
        if(!response ){
            console.log(">>> query not match");
            throw new Error("query not match")
        }
        
        console.log(">>> returning fetched", response);
        return response;

    } catch(error){
        console.log(">>> error at updateById", error);
        throw new Error(JSON.stringify(error));
    }
    
};

export default Unit;