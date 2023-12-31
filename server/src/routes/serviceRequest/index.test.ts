import request from "supertest";
import {expect} from 'chai';


const baseUrl = "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev"


describe("login /serviceRequest", ()=>{
    it('should return 401 if token is not found', async () =>{
        const responsePost = await request(baseUrl)
        .post("/serviceRequest")
        .send({});
        expect(responsePost.status).to.equal(401);
    });
});