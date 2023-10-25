// import mockingoose from "mockingoose";
import {UserDocument} from "../../schema/index.js";
import {default as findUserById } from "./index.js";

interface Error {
    message: string
}

describe("Test findUserById", () =>{
    it("should throw error if query is not existed", async()=>{
        const result = await findUserById({} as any) as any;
        
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });

    it("should throw error if query _id is not existed", async()=>{
        const result = await findUserById({ query: { } } as any) as any;

        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });

    it("should throw error if response is undefined", async()=>{
        const validId = "test";
        const result = await findUserById({ query: {_id: validId } } as any) as any;

        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });

    it("should throw error if response doesn't have username property", async()=>{
        const validId = "test";
        const result = await findUserById({ query: {_id: validId } } as any) as any;

        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });

    it("should return an object", async () =>{

        const validId = "6527631a6059c2549d9aa9b4";
        const result = await findUserById({query: {_id: validId}}) as unknown as UserDocument;

        expect(result).toBeDefined;
        expect(typeof result).toBe("object");
        expect(result.name).toBeDefined();
        expect(result.email).toBeDefined();
        expect(result.username).toBeDefined();
        expect(result.role).toBeDefined();
        expect(result.password).toBeDefined();

    });
});

