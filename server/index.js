import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from './utils/openapi.js';
// import {corsWhitelist} from './utils/index.js';
import { logger, securedHeader } from './utils/index.js';
import { serviceRequestRoute, userRoute, loginRoute, logoutRoute, resetTokenRoute } from './routes/index.js';
console.log(">>>try", 13.5);
const app = express();
app.use((req, res, next) => {
    const origin = req.get('Origin');
    console.log(">>>origin", origin);
    next();
});
//basic middlewares
app.use(logger);
// app.use(cors());
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// app.use(cors({
//   origin: "http://week17.app.s3-website.ap-southeast-3.amazonaws.com",
//   methods: 'GET,POST,PUT,DELETE',
//   credentials: true, // Allow credentials in cross-origin requests
// }));
// app.use(corsWhitelist);
app.use(securedHeader);
//Define the allowed origins explicitly
// app.use((req:any, res:any, next:any)=>{
//     console.log(">>>set header manually 1");
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     res.setHeader('Access-Control-Allow-Methods', 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT');
//     const {headers} = req;
//     const resHeader = res.headers;
//     console.log(">>>request header", headers);
//     console.log(">>>response header", resHeader);
//     next()
// })
// app.use((req, res, next) => {
//   console.log(">>>pseudo-cors");
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // You can replace '*' with a specific origin
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//    res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   if (req.method === 'OPTIONS') {
//     res.sendStatus(204); // Respond to preflight requests with a 204 No Content status
//   } else {
//     next();
//   }
// });
const allowedOrigins = [
    'http://week17.app.s3-website.ap-southeast-3.amazonaws.com',
    'https://dwampb0q8b.execute-api.ap-southeast-3.amazonaws.com',
    'https://dwampb0q8b.execute-api.ap-southeast-3.amazonaws.com/dev',
    'http://localhost:5001',
    'http://localhost:3000'
];
// Use the cors middleware with the allowed origins
// app.use(cors({
//   origin: function (origin:any, callback) {
//     console.log(">>origin cors at index", origin)
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//     console.log(">>>allowed origin index of", allowedOrigins.indexOf(origin));
//     // console.log("callback>>",JSON.stringify(callback));
//     // callback(null, true);
//     } else {
//         console.log(">>>allowed origin index of", allowedOrigins.indexOf(origin));
//         console.log(">>>not allowed")
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// }));
app.use(cors({
    origin(origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
}));
// app.use((req:any, res:any, next:any)=>{
//     console.log(">>>set header manually 2")
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     next()
// })
app.use(express.json());
app.use(cookieParser());
//openapi
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
//routes
app.use('/serviceRequest', serviceRequestRoute);
app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/resetToken', resetTokenRoute);
app.listen(5001, () => [
    console.log("listening at", 5001)
]);
export const handler = serverless(app);
