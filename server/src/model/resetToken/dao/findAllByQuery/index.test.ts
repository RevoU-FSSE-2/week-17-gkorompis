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

    it("should throw error if query is not proper", async()=>{
        const query = "";
        const result = await findResetTokenById({ query } as any) as any;

        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });


    it("should return empty array if query not match", async () =>{

        const username = "" as any;
        const result = await findResetTokenById({query: {username}}) as unknown as ResetTokenDocument;

        expect(Array.isArray(result)).toBe(true);

    });

    it("should return array of object if query match", async () =>{

        const username = "" as any;
        const result = await findResetTokenById({query: {username}}) as unknown as ResetTokenDocument[];

        expect(Array.isArray(result)).toBe(true);
        result.forEach(item => {
            expect(item).toBeDefined();
            expect(typeof item).toBe("object");
        })

    });
});

