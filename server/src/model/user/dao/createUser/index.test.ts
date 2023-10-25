import mockingoose from "mockingoose";
import User, { UserDocument } from "../../schema/index.js";
import {default as createUser} from "./index.js";

interface Error {
    message: string
}

describe("Test createUser", () => {
  
  it("should throw error if userData is not existed", async ()=>{

    const result = await createUser({ } as any) as any;

    expect(result).toBeDefined();
    expect(result.message).toBeDefined();
  });

  it("should return new user", async ()=>{
    const userData: UserDocument = {
      name: "John Doe",
      email: "john.doe@example.com",
      username: "johndoe",
      role: "user",
      password: "password123",
    };

    const result = await createUser({userData}) as UserDocument;

    expect(result).toBeDefined();
    expect(result._id).toBeDefined();

  });

  

});
