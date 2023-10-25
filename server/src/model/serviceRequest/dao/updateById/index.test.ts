import {default as updateById } from "./index.js"

interface Error {
    message: string
}

interface Acknowledged {
    acknowledged: boolean
}

describe("Test updateById", ()=>{
    it("should return error object if query is not existed", async () => {
        const result = await updateById({} as any) as any;
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    })

    it("should return error object if query _id is not existed", async ()=>{
        const result = await updateById({query: {}} as any) as any;
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    })

    it("should return error object if query id is not matched and update is empty", async ()=>{
        const result = await updateById({query: {_id: "rAnD0MstR!n9"}} as any) as any;
        expect(result).toBeDefined();
        expect(result.message).toBeUndefined();
    })

    it("should return error object if query id is not matched", async ()=>{
        const result = await updateById({query: {_id: "rAnD0MstR!n9"}, update: {status: "deleted"}} as any) as any;
        expect(result).toBeDefined();
        expect(result.message).toBeUndefined();
    })

    it("should return status if no error is catched", async()=>{
        const result = await updateById({query: {_id: "65276274f4d1aec85d6fb092"}, update: {status: "approved"}} as any) as Acknowledged;
        expect(result).toBeDefined();
        expect(result.acknowledged).toBeDefined();
    })
})