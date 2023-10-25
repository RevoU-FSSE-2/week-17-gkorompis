import mongoose from "mongoose";
import "../../../db/index.js";
const serviceRequestSchema = new mongoose.Schema({
    requestedBy: { type: String, required: true },
    status: { type: String, enum: ["pending", "approved", "deleted"], default: "pending" },
    requestedServices: { type: [String], required: true },
    createdTime: { type: Date, default: Date.now },
    updatedTime: { type: Date, default: Date.now }
});
const ServiceRequest = mongoose.model("ServiceRequest", serviceRequestSchema);
export default ServiceRequest;
