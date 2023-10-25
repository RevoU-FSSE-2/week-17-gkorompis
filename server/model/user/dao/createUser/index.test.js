var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { default as createUser } from "./index.js";
describe("Test createUser", () => {
    it("should throw error if userData is not existed", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield createUser({});
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    }));
    it("should return new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            name: "John Doe",
            email: "john.doe@example.com",
            username: "johndoe",
            role: "user",
            password: "password123",
        };
        const result = yield createUser({ userData });
        expect(result).toBeDefined();
        expect(result._id).toBeDefined();
    }));
});
