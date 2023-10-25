import request from "supertest";
import {expect} from 'chai';


const baseUrl = "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev"


describe("login /user return status 200", ()=>{
    it('should return 409 if username already existed', async () =>{
        const responsePost = await request(baseUrl)
        .post("/user")
        .send({username: "user1", password: "asdfASDF01"});
        expect(responsePost.status).to.equal(409);
    })
    it('should return 409 if email already existed', async () =>{
        const responsePost = await request(baseUrl)
        .post("/user")
        .send({username: "user1jaksjdf", email: "user1@gmail.com", password: "asdfASDF01"});
        expect(responsePost.status).to.equal(409);
    })
    it('should return 400 if email already existed', async () =>{
        const responsePost = await request(baseUrl)
        .post("/user")
        .send({});
        expect(responsePost.status).to.equal(400);
    })
    it('should return 400 if email already existed', async () =>{
        const responsePost = await request(baseUrl)
        .post("/user")
        .send({});
        expect(responsePost.status).to.equal(400);
    })
});