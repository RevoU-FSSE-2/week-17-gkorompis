var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Unit from './index.js'; // Import your function to be tested
describe('Unit function', () => {
    it('should return a valid response', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = { params: { id: "test" } };
        const res = {};
        yield Unit(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.any(Object));
    }));
    it('should handle errors', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = { params: { id: "test" } };
        const res = {};
        const deleteOneByQuery = jest.fn().mockRejectedValue(new Error('Test error'));
        yield Unit(req, res, deleteOneByQuery);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Test error' });
    }));
});
