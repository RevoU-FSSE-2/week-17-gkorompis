import Unit from './index.js';
import { returnMessage } from './externalFunction.js';
import {jest} from '@jest/globals';

const mockfn = jest.fn(returnMessage);

describe("Unit function", ()=>{
    it("should returned defined response", async ()=>{
       // @ts-ignore
       mockfn.mockImplementation(()=> "this is message");
        const response = await Unit();
        expect(response).toBeDefined();
        expect(response).toBe("this is message");
    });
})
describe("Unit function", ()=>{
    it("should return not found if response undefined", async ()=>{
       // @ts-ignore
        mockfn.mockImplementation(()=> undefined);
        const response = await Unit();
        expect(response).toBeDefined();
        expect(response).toBe("not found");
    });
})

