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
const { findAllByQuery } = ServiceRequest;
const Unit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get query
        const reqQuery = req.query;
        const query = Object.assign({}, reqQuery);
        // fetch collections
        console.log(">>> invoking model ServiceRequest at getController", query);
        const response = yield findAllByQuery({ query });
        console.log(">>> response at getController", typeof response);
        if (!response) {
            throw new Error("no response from findAllByQuery");
        }
        res.status(200);
        //return response
        return res.json(response);
    }
    catch (error) {
        console.log(">>> error at getController:", error);
        const errorResponse = error;
        const { message } = errorResponse;
        res.status(500);
        return res.json({ message });
    }
});
export default Unit;
