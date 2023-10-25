// import Unit from './index.js';
// import {insideFunctionOne } from './externalFunction.js';
// import {jest} from '@jest/globals'

// // jest.mock("./externalFunction.js");
// // const insideFunctionOne = jest.fn().mockImplementation(()=>Promise.resolve("Operations Success"));

// // const mockExternalFunction = insideFunctionOne as jest.MockedFunction<typeof insideFunctionOne>;
// // mockExternalFunction.mockImplementation(()=> Promise.resolve("Operations Success"));

// jest.mock("./externalFunction.js", ()=> ({
//     __esModule: true,
//     insideFunctionOne: jest.fn(()=> Promise.resolve("Operations Success"))
// }));

// describe("Unit function", ()=>{
//     it("should returned defined response", async ()=>{
//         // const mockExternalFunction = jest.fn().mockImplementation(()=> Promise.resolve("Operations Success")) as typeof insideFunctionOne;
//         // const mockInsideFunctionOne = insideFunctionOne as jest.MockedFunction<typeof insideFunctionOne>;
//         // insideFunctionOne.
//         // insideFunctionOne.
//         const response = await Unit();
//         expect(response).toBeDefined();
//         expect(response).toBe("Operations Success");
//     });
// })

