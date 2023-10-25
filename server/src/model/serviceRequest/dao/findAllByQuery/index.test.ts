// import mockingoose from "mockingoose";
import {ServiceRequestDocument} from "../../schema/index.js";
import {default as findServiceRequestById } from "./index.js";

interface Error {
    message: string
}

describe("Test findServiceRequestById", () =>{
    it("should throw error if query is not existed", async()=>{
        const result = await findServiceRequestById({} as any) as any;
        
        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });

    it("should throw error if query is not proper", async()=>{
        const query = "";
        const result = await findServiceRequestById({ query } as any) as any;

        expect(result).toBeDefined();
        expect(result.message).toBeDefined();
    });


    it("should return empty array if query not match", async () =>{

        const status = "" as any;
        const result = await findServiceRequestById({query: {status}}) as unknown as ServiceRequestDocument;

        expect(Array.isArray(result)).toBe(true);

    });

    it("should return array of object if query match", async () =>{

        const status = "" as any;
        const result = await findServiceRequestById({query: {status}}) as unknown as ServiceRequestDocument[];

        expect(Array.isArray(result)).toBe(true);
        result.forEach(item => {
            expect(item).toBeDefined();
            expect(typeof item).toBe("object");
        })

    });
});

