var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ServiceRequest from "../../schema/index.js";
import { connectToDatabase } from "../../../../db/index.js";
const Unit = ({ query }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield connectToDatabase();
        console.log(">>>connecting", typeof connection);
        console.log(">>> find by id");
        if (!query || !query["_id"]) {
            console.log("query or id can't be empty");
            throw new Error("query or id can't be empty");
        }
        console.log(">>> invoking model", { query });
        const response = yield ServiceRequest.deleteOne(query);
        console.log(">>> response", response);
        if (!response) {
            console.log(">>> query not match");
            throw new Error("query not match");
        }
        console.log(">>> returning fetched", response);
        return response;
    }
    catch (error) {
        console.log(">>> error at deleteOneByQuery", error);
        throw new Error(JSON.stringify(error));
    }
});
export default Unit;
