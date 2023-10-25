
import ResetToken, { ErrorResponse } from "../../schema/index.js"
import { ResetTokenData } from "../../schema/index.js";
import { connectToDatabase } from "../../../../db/index.js";
interface IndexParameter {
    resetTokenData: ResetTokenData
}

const Unit = async ({resetTokenData}: IndexParameter) =>{
    try {
        const connection = await connectToDatabase();
        console.log(">>>connecting", typeof connection);
        if(!resetTokenData){
            console.log(">>> resetTokenData can't be empty");
            throw new Error("resetTokenData can't be empty");
        }
        console.log('>>> new resetToken');
        const newResetToken = new ResetToken(resetTokenData);

        console.log(">>> returning new resetToken", newResetToken);
        return newResetToken.save();

    } catch(error){
        console.log(">>> error at createResetToken", error);
        throw new Error(JSON.stringify(error));
    }
};

export default Unit;