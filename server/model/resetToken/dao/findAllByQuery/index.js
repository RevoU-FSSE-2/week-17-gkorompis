var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ResetToken from "../../schema/index.js";
import { connectToDatabase } from "../../../../db/index.js";
const Unit = ({ query }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield connectToDatabase();
        console.log(">>>connecting", typeof connection);
        console.log(">>> find all by query");
        if (!query) {
            console.log("input doesn't have query property");
            throw new Error("input doesn't have query property");
        }
        console.log(">>> invoking ResetToken.find");
        const fetched = yield ResetToken.find(query).exec();
        if (!fetched || !Array.isArray(fetched)) {
            console.log(">>> collections not found:", fetched);
            throw new Error("collections not found");
        }
        console.log(">>> returning collection", fetched);
        return fetched;
    }
    catch (error) {
        console.log(">>> error at findAllByQuery", error);
        throw new Error(JSON.stringify(error));
    }
});
export default Unit;
