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
const Unit = ({ serviceRequestData }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield connectToDatabase();
        console.log(">>>connecting", typeof connection);
        if (!serviceRequestData) {
            console.log(">>> serviceRequestData can't be empty");
            throw new Error("serviceRequestData can't be empty");
        }
        console.log('>>> new serviceRequest');
        const newServiceRequest = new ServiceRequest(serviceRequestData);
        console.log(">>> returning new serviceRequest", newServiceRequest);
        return newServiceRequest.save();
    }
    catch (error) {
        console.log(">>> error at createServiceRequest", error);
        throw new Error(JSON.stringify(error));
    }
});
export default Unit;
