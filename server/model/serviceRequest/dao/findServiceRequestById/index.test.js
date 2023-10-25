var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { default as findServiceRequestById } from "./index.js";
describe("Test findServiceRequestById", () => {
    it("should throw error if query is not existed", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield findServiceRequestById({});
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should throw error if query _id is not existed", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield findServiceRequestById({ query: {} });
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should throw error if response is undefined", () => __awaiter(void 0, void 0, void 0, function* () {
        const validId = "test";
        const result = yield findServiceRequestById({ query: { _id: validId } });
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should throw error if response doesn't have requestedBy property", () => __awaiter(void 0, void 0, void 0, function* () {
        const validId = "test";
        const result = yield findServiceRequestById({ query: { _id: validId } });
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should return an object", () => __awaiter(void 0, void 0, void 0, function* () {
        const validId = "6527631a6059c2549d9aa9b4";
        const result = yield findServiceRequestById({ query: { _id: validId } });
        expect(result).toBeDefined;
        expect(typeof result).toBe("object");
        expect(result.requestedBy).toBeDefined();
        expect(result.status).toBeDefined();
        expect(result.requestedServices).toBeDefined();
        expect(result.createdTime).toBeDefined();
        expect(result.updatedTime).toBeDefined();
    }));
});
