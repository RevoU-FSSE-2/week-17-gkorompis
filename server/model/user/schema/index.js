import mongoose from "mongoose";
import "../../../db/index.js";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    role: { type: String, enum: ["admin", "officer", "member"], default: "member" },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);
export default User;
