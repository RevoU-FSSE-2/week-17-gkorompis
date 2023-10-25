import mongoose from "mongoose";
import "../../../../db/index.js";
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    role: String,
    password: String
});
const User = mongoose.model('User', userSchema);
export default User;
