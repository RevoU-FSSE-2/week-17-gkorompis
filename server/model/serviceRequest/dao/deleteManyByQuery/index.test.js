var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { default as deleteOneByQuery } from "./index.js";
describe("Test deleteOneByQuery", () => {
    it("should return error message if query is not existed", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = {};
        const result = yield deleteOneByQuery(query);
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should return error message if quqery _id is not existed", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = { query: {} };
        const result = yield deleteOneByQuery(query);
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should return db response if not match", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = { query: { _id: "sssd" } };
        const result = yield deleteOneByQuery(query);
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should return db response if match to delete", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = { query: { _id: "6526a9642551e6a16d179693" } };
        const result = yield deleteOneByQuery(query);
        expect(result).toBeDefined();
        expect(result.acknowledged).toBeDefined();
    }));
});
