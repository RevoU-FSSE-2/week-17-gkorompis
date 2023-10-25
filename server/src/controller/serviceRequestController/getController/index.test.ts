import Unit from './index.js';
import { Request, Response } from 'express';
import {jest} from '@jest/globals';

jest.mock("")

describe("Unit testing getController", ()=>{
    it("should return a defined response", async ()=>{
        const req = {query:{}} as unknown as Request;
        const res = { status: jest.fn(()=>200), json: jest.fn((response)=>{return JSON.stringify(response)})} as unknown as Response;
        const testingResponse = await Unit(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toBeDefined();
        expect(testingResponse).toBeDefined();
    })
    it("should return error", async ()=>{
        const req = {query:null} as unknown as Request;
        const res = { status: jest.fn(()=>500), json: jest.fn((response)=>{return JSON.stringify(response)})} as unknown as Response;
        const testingResponse = await Unit(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        // expect(res.json).toBeDefined();
        // expect(testingResponse).toBeDefined();
    })
})

