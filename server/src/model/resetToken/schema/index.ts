import mongoose from "mongoose";
import "../../../db/index.js";


export interface ResetTokenData {
    username?: string,
    email?: string,
    token?: string
}
export interface ResetTokenDocument {
    username?: string,
    email?: string,
    token?: string,
    _id?: string
}
export interface ResetTokenQuery {
    username?: string,
    email?: string,
    token?: string,
    _id?: string
}

export interface ErrorResponse {
    message: string;
}

const resetTokenSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: false},
    token: {type: String, required: true}
});

const ResetToken = mongoose.model<ResetTokenDocument>("ResetToken", resetTokenSchema);

export default ResetToken;