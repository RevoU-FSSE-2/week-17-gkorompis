import cors from 'cors';
const whitelist = [
   "http://localhost:5001", "http://127.0.0.1:5500", "http://localhost:3000" , "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev"
   , "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com", "http://week17.app.s3-website.ap-southeast-3.amazonaws.com/"
]
const corsOptions = {
    origin: (origin:any, callback:any)=>{
      console.log(">>>CORS: origin",origin);
      console.log(">>>CORS: callback", callback);
      console.log(">>> isWhitelisted", whitelist.includes(origin))
        if (whitelist.includes(origin) || !origin){
            console.log(">>>CORS: allowed by cors")
            callback(null, true)
        } else {
            console.log(">>>CORS: not allowed by cors")
            callback(new Error('not allowed by cors'))
        }
    },
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
};
const corsWhitelist = cors(corsOptions);
console.log(">>> cors whitelist");
export default corsWhitelist;
