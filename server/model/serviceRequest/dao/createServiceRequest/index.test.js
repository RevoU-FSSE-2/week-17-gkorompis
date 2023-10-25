var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { default as createServiceRequest } from "./index.js";
describe("Test createServiceRequest", () => {
    it("should throw error if serviceRequestData is not existed", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield createServiceRequest({});
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should return new serviceRequest", () => __awaiter(void 0, void 0, void 0, function* () {
        const serviceRequestData = {
            requestedBy: "super",
            status: "pending",
            requestedServices: ["code01"]
        };
        const result = yield createServiceRequest({ serviceRequestData });
        expect(result).toBeDefined();
        expect(result._id).toBeDefined();
    }));
});
