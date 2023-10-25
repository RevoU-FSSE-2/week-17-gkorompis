var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { default as createResetToken } from "./index.js";
describe("Test createResetToken", () => {
    it("should throw error if resetTokenData is not existed", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield createResetToken({});
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should return new resetToken", () => __awaiter(void 0, void 0, void 0, function* () {
        const resetTokenData = {
            username: "user",
            email: "email@email",
            token: "token"
        };
        const result = yield createResetToken({ resetTokenData });
        expect(result).toBeDefined();
        expect(result._id).toBeDefined();
    }));
});
