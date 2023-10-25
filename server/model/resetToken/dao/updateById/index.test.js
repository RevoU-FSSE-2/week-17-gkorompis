var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { default as updateById } from "./index.js";
describe("Test updateById", () => {
    it("should return error object if query is not existed", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield updateById({});
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should return error object if query _id is not existed", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield updateById({ query: {} });
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should return error object if query id is not matched and update is empty", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield updateById({ query: { _id: "rAnD0MstR!n9" } });
        expect(result).toBeDefined();
        expect(result.message).toBeUndefined();
    }));
    it("should return error object if query id is not matched", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield updateById({ query: { _id: "rAnD0MstR!n9" }, update: { status: "deleted" } });
        expect(result).toBeDefined();
        expect(result.message).toBeUndefined();
    }));
    it("should return status if no error is catched", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield updateById({ query: { _id: "65276274f4d1aec85d6fb092" }, update: { status: "approved" } });
        expect(result).toBeDefined();
        expect(result.acknowledged).toBeDefined();
    }));
});
