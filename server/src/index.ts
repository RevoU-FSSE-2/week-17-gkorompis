import express from 'express';
import cors from 'cors'
import serverless from 'serverless-http';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from './utils/openapi.js';

// import {corsWhitelist} from './utils/index.js';

import {
    logger,
    securedHeader
} from './utils/index.js';

import { 
    serviceRequestRoute,
    userRoute,
    loginRoute,
    logoutRoute,
    resetTokenRoute
} from './routes/index.js';
console.log(">>>version", 1.0);
const app = express();
app.use((req, res, next)=>{
    const origin = req.get('Origin');
    console.log(">>>origin", origin);
    next();
})

//basic middlewares
app.use(logger);
app.use(securedHeader);

//cors
const allowedOrigins = [
    'http://week17.app.s3-website.ap-southeast-3.amazonaws.com',
    'https://dwampb0q8b.execute-api.ap-southeast-3.amazonaws.com',
    'https://dwampb0q8b.execute-api.ap-southeast-3.amazonaws.com/dev',
    "https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com",
    "https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev",
    'http://localhost:5001',
    'http://localhost:3000'
];
app.use(
  cors({
    origin(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

//other middlewares
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

app.listen(5001, ()=>[
    console.log("listening at", 5001)
]);

export const handler = serverless(app);



