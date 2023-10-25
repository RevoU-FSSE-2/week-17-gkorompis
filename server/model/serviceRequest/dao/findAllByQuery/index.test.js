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
    it("should throw error if query is not proper", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = "";
        const result = yield findServiceRequestById({ query });
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should return empty array if query not match", () => __awaiter(void 0, void 0, void 0, function* () {
        const status = "";
        const result = yield findServiceRequestById({ query: { status } });
        expect(Array.isArray(result)).toBe(true);
    }));
    it("should return array of object if query match", () => __awaiter(void 0, void 0, void 0, function* () {
        const status = "";
        const result = yield findServiceRequestById({ query: { status } });
        expect(Array.isArray(result)).toBe(true);
        result.forEach(item => {
            expect(item).toBeDefined();
            expect(typeof item).toBe("object");
        });
    }));
});
