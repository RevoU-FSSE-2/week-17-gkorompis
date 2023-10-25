import mongoose from "mongoose";
import "../../../db/index.js";

export interface UserDocument {
    name: string,
    email: string,
    username: string,
    role: string,
    password: string,
    _id?: string
}
export interface UserQuery {
    name?: string,
    email?: string,
    username?: string,
    role?: string,
    password?: string,
    _id?: string
}
export interface ErrorResponse{
    message: string
}

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    username: {type:String, required: true},
    role: {type:String, enum: ["admin", "officer", "member"], default: "member"},
    password: {type:String, required: true}
});

const User = mongoose.model<UserDocument>('User', userSchema);
export default User;



