import mongoose from "mongoose";
import "../../../db/index.js";
const resetTokenSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: false },
    token: { type: String, required: true }
});
const ResetToken = mongoose.model("ResetToken", resetTokenSchema);
export default ResetToken;
