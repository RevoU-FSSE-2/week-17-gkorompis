import nodemailer from 'nodemailer';

const sendEmail = async (email: string) =>{
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
        }
        console.log(">>>sending via nodemailer")
        const response = await transporter.sendMail(mailOptions);
    //    transporter.sendMail(mailOptions, (error, info)=>{
    //         if(error){
    //             console.log(">>>email sending is error:", error)
    //         } else {
    //             console.log(">>>email sending success", info)
    //             return info;
    //         }
    //    })

    console.log(">>>nodemailer respones", response);
    return response
    } catch (error) {
        console.log(">>>error at nodemailer Config");
        return error;
    }
};


export default sendEmail;