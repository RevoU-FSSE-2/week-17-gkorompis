var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../../schema/index.js";
import { connectToDatabase } from "../../../../db/index.js";
const Unit = ({ userData }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield connectToDatabase();
        console.log(">>>connecting", typeof connection);
        if (!userData) {
            console.log(">>> userData can't be empty");
            throw new Error("userData can't be empty");
        }
        console.log('>>> new user');
        const newUser = new User(userData);
        console.log(">>> returning new user", newUser);
        return newUser.save();
    }
    catch (error) {
        console.log(">>> error at createUser", error);
        throw new Error(JSON.stringify(error));
    }
});
export default Unit;
