import User from "../../schema/index.js"
import { UserDocument } from "../../schema/index.js";
import { connectToDatabase } from "../../../../db/index.js";
interface IndexParameter {
    userData: UserDocument
}

const Unit = async ({userData}: IndexParameter) =>{
    try {
        const connection = await connectToDatabase();
        console.log(">>>connecting", typeof connection);
        if(!userData){
            console.log(">>> userData can't be empty");
            throw new Error("userData can't be empty");
        }
        console.log('>>> new user');
        const newUser = new User(userData);

        console.log(">>> returning new user", newUser);
        return newUser.save();

    } catch(error){
        console.log(">>> error at createUser", error);
        throw new Error(JSON.stringify(error));
    }
    
};

export default Unit;