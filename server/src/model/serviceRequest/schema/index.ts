import mongoose from "mongoose";
import "../../../db/index.js";

export type RequestStatus = "pending" | "approved" | "deleted"

export interface ServiceRequestDocument {
    requestedBy: string,
    status: RequestStatus,
    requestedServices: string[],
    createdTime?: Date,
    updatedTime?: Date,
    _id?: string
}
export interface ServiceRequestQuery {
    requestedBy?: string,
    status?: RequestStatus,
    requestedServices?: string[],
    createdTime?: Date,
    updatedTime?: Date,
    _id?: string
}
export interface ErrorResponse {
    message: string;
}

const serviceRequestSchema = new mongoose.Schema({
    requestedBy: {type: String, required: true},
    status: {type: String, enum: ["pending", "approved", "deleted"], default: "pending"},
    requestedServices: {type: [String], required: true},
    createdTime: {type: Date, default: Date.now},
    updatedTime: {type: Date, default: Date.now}
});

const ServiceRequest = mongoose.model<ServiceRequestDocument>("ServiceRequest", serviceRequestSchema);

export default ServiceRequest;