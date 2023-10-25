// import mockingoose from "mockingoose";
import {UserDocument} from "../../schema/index.js";
import {default as findAllByQuery } from "./index.js";

interface Error {
    message: string
}

describe("Test findAllByQuery", () =>{
    it("should throw error if query is not existed", async()=>{
        const result = await findAllByQuery({} as any) as any ;
        const {message} = result;
        
        expect(findAllByQuery).toThrow(TypeError);
        expect(message).toBeUndefined();
    });

    it("should throw error if query is not proper", async()=>{
        const query = "";
        const result = await findAllByQuery({ query } as any) as any;

        const {message} = result;
        expect(findAllByQuery).toThrow(TypeError);
        expect(message).toBeUndefined();
    });


    it("should return empty array if query not match", async () =>{

        const rol = "";
        const result = await findAllByQuery({query: {role: rol}}) as unknown as UserDocument;

        expect(Array.isArray(result)).toBe(true);

    });

    it("should return array of object if query match", async () =>{

        const rol = "";
        const result = await findAllByQuery({query: {role: rol}}) as unknown as UserDocument[];

        expect(Array.isArray(result)).toBe(true);
        result.forEach(item => {
            expect(item).toBeDefined();
            expect(typeof item).toBe("object");
        })

    });
});

