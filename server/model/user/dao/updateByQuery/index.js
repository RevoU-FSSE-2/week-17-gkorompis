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
const Unit = ({ query, update }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield connectToDatabase();
        console.log(">>>connecting", typeof connection);
        console.log(">>> find by id");
        if (!query) {
            console.log("query can't be empty");
            throw new Error("query can't be empty");
        }
        console.log(">>> invoking User.updateOne");
        console.log(">>> query", query);
        console.log(">>> update", update);
        const setUpdate = update || {};
        const response = yield User.updateOne(query, { $set: setUpdate });
        console.log(">>> response", response);
        if (!response) {
            console.log(">>> query not match");
            throw new Error("query not match");
        }
        console.log(">>> returning fetched", response);
        return response;
    }
    catch (error) {
        console.log(">>> error at updateById", error);
        throw new Error(JSON.stringify(error));
    }
});
export default Unit;
