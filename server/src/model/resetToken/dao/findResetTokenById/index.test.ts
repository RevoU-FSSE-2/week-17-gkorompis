// import mockingoose from "mockingoose";
import {ResetTokenDocument} from "../../schema/index.js";
import {default as findResetTokenById } from "./index.js";

interface Error {
    message: string
}

describe("Test findResetTokenById", () =>{
    it("should throw error if query is not existed", async()=>{
        const result = await findResetTokenById({} as any) as any;
        
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });

    it("should throw error if query _id is not existed", async()=>{
        const result = await findResetTokenById({ query: { } } as any) as any;

        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });

    it("should throw error if response is undefined", async()=>{
        const validId = "test";
        const result = await findResetTokenById({ query: {_id: validId } } as any) as any;

        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });

    it("should throw error if response doesn't have requestedBy property", async()=>{
        const validId = "test";
        const result = await findResetTokenById({ query: {_id: validId } } as any) as any;

        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });

    it("should return an object", async () =>{

        const validId = "6527631a6059c2549d9aa9b4";
        const result = await findResetTokenById({query: {_id: validId}}) as unknown as ResetTokenDocument;

        expect(result).toBeDefined;
        expect(typeof result).toBe("object");

    });
});

