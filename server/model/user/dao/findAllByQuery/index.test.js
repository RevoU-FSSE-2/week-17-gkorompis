var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { default as findAllByQuery } from "./index.js";
describe("Test findAllByQuery", () => {
    it("should throw error if query is not existed", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield findAllByQuery({});
        const { message } = result;
        expect(findAllByQuery).toThrow(TypeError);
        expect(message).toBeUndefined();
    }));
    it("should throw error if query is not proper", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = "";
        const result = yield findAllByQuery({ query });
        const { message } = result;
        expect(findAllByQuery).toThrow(TypeError);
        expect(message).toBeUndefined();
    }));
    it("should return empty array if query not match", () => __awaiter(void 0, void 0, void 0, function* () {
        const rol = "";
        const result = yield findAllByQuery({ query: { role: rol } });
        expect(Array.isArray(result)).toBe(true);
    }));
    it("should return array of object if query match", () => __awaiter(void 0, void 0, void 0, function* () {
        const rol = "";
        const result = yield findAllByQuery({ query: { role: rol } });
        expect(Array.isArray(result)).toBe(true);
        result.forEach(item => {
            expect(item).toBeDefined();
            expect(typeof item).toBe("object");
        });
    }));
});
