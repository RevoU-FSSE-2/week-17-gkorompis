import mockingoose from "mockingoose";
import ResetToken, { ResetTokenDocument } from "../../schema/index.js";
import {default as createResetToken} from "./index.js";



describe("Test createResetToken", () => {
  
  it("should throw error if resetTokenData is not existed", async ()=>{

    const result = await createResetToken({ } as any) as any;

    expect(result).toBeDefined();
    expect(result.message).toBeDefined();
  });

  it("should return new resetToken", async ()=>{
    const resetTokenData: ResetTokenDocument = {
      username: "user",
      email: "email@email",
      token: "token"
    };

    const result = await createResetToken({resetTokenData}) as ResetTokenDocument;

    expect(result).toBeDefined();
    expect(result._id).toBeDefined();

  });

  
});
