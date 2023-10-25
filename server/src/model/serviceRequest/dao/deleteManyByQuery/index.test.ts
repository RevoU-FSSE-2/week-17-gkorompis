import {default as deleteOneByQuery} from "./index.js";

interface Error {
    message: string
}
interface DbResponse {
    acknowledged: boolean;
    matchedCount: number;
}

describe("Test deleteOneByQuery", ()=>{
    it("should return error message if query is not existed", async ()=>{
        const query = {};
        const result = await deleteOneByQuery(query as any) as any;
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });
    it("should return error message if quqery _id is not existed", async ()=>{
        const query = {query: {}};
        const result = await deleteOneByQuery(query as any) as any;
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });
    it("should return db response if not match", async ()=>{
        const query = {query: {_id: "sssd"}};
        const result = await deleteOneByQuery(query as any) as unknown as  Error;
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });
    it("should return db response if match to delete", async ()=>{
        const query = {query: {_id: "6526a9642551e6a16d179693"}};
        const result = await deleteOneByQuery(query as any) as unknown as  DbResponse;
        expect(result).toBeDefined();
        expect(result.acknowledged).toBeDefined();
       
    })
});
