var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import nodemailer from 'nodemailer';
const sendEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer.createTransport({
            service: "Yahoo",
            auth: {
                user: "email-smtp.us-east-1.amazonaws.com",
                pass: "asdfASDF00"
            }
        });
        const mailOptions = {
            from: 'strumsproject@​yahoo.com',
            to: email,
            subject: "Password Reset Link",
            text: `Click on this link to reset your password`
        };
        console.log(">>>sending via nodemailer");
        const response = yield transporter.sendMail(mailOptions);
        //    transporter.sendMail(mailOptions, (error, info)=>{
        //         if(error){
        //             console.log(">>>email sending is error:", error)
        //         } else {
        //             console.log(">>>email sending success", info)
        //             return info;
        //         }
        //    })
        console.log(">>>nodemailer respones", response);
        return response;
    }
    catch (error) {
        console.log(">>>error at nodemailer Config");
        return error;
    }
});
export default sendEmail;
