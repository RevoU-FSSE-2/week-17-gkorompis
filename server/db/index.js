var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// db.js
import mongoose from "mongoose";
import "../loadenv.js";
export const MONGODB_SECRET = process.env.MONGODB_SECRET;
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'portal-v2',
};
export const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield mongoose.connect(MONGODB_SECRET, config);
        console.log(">>>success at connect to db", typeof response);
        return response;
    }
    catch (error) {
        console.log(">>>error at connect to db");
    }
});
