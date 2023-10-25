var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Unit from './index.js';
import { jest } from '@jest/globals';
jest.mock("");
describe("Unit testing getController", () => {
    it("should return a defined response", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = { query: {} };
        const res = { status: jest.fn(() => 200), json: jest.fn((response) => { return JSON.stringify(response); }) };
        const testingResponse = yield Unit(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toBeDefined();
        expect(testingResponse).toBeDefined();
    }));
    it("should return error", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = { query: null };
        const res = { status: jest.fn(() => 500), json: jest.fn((response) => { return JSON.stringify(response); }) };
        const testingResponse = yield Unit(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        // expect(res.json).toBeDefined();
        // expect(testingResponse).toBeDefined();
    }));
});