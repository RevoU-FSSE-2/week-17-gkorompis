var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from "supertest";
import { expect } from 'chai';
const baseUrl = "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev";
describe("login /user return status 200", () => {
    it('should return 409 if username already existed', () => __awaiter(void 0, void 0, void 0, function* () {
        const responsePost = yield request(baseUrl)
            .post("/user")
            .send({ username: "user1", password: "asdfASDF01" });
        expect(responsePost.status).to.equal(409);
    }));
    it('should return 409 if email already existed', () => __awaiter(void 0, void 0, void 0, function* () {
        const responsePost = yield request(baseUrl)
            .post("/user")
            .send({ username: "user1jaksjdf", email: "user1@gmail.com", password: "asdfASDF01" });
        expect(responsePost.status).to.equal(409);
    }));
    it('should return 400 if email already existed', () => __awaiter(void 0, void 0, void 0, function* () {
        const responsePost = yield request(baseUrl)
            .post("/user")
            .send({});
        expect(responsePost.status).to.equal(400);
    }));
    it('should return 400 if email already existed', () => __awaiter(void 0, void 0, void 0, function* () {
        const responsePost = yield request(baseUrl)
            .post("/user")
            .send({});
        expect(responsePost.status).to.equal(400);
    }));
});
