import mockingoose from "mockingoose";
import ServiceRequest, { ServiceRequestDocument } from "../../schema/index.js";
import {default as createServiceRequest} from "./index.js";



describe("Test createServiceRequest", () => {
  
  it("should throw error if serviceRequestData is not existed", async ()=>{

    const result = await createServiceRequest({ } as any) as any;

    expect(result).toBeDefined();
    expect(result.message).toBeDefined();
  });

  it("should return new serviceRequest", async ()=>{
    const serviceRequestData: ServiceRequestDocument = {
      requestedBy: "super",
      status: "pending",
      requestedServices: ["code01"]
    };

    const result = await createServiceRequest({serviceRequestData}) as ServiceRequestDocument;

    expect(result).toBeDefined();
    expect(result._id).toBeDefined();

  });

  
});
