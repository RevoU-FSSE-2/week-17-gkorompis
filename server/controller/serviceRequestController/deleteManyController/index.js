var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ServiceRequest } from "../../../model/index.js";
const { deleteManyByQuery } = ServiceRequest;
const Unit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get query
        const { body } = req;
        const query = body || {};
        // delte document
        console.log(">>> invoking model ServiceRequest at deleteManyController");
        // deleteOneByQuery = cb ? cb : deleteOneByQuery;
        const response = yield deleteManyByQuery({ query });
        console.log(">>> response at deleteManyController", response);
        if (!response) {
            throw new Error("no response from deleteManyByQuery");
        }
        //return response
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(">>> error at deleteManyController:", error);
        const errorResponse = error;
        const { message } = errorResponse;
        res.status(500);
        return res.json({ message });
    }
});
export default Unit;
// rbac: admin can find all user, but member can only find self;
