export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'week16',
      version: '1.0.0',
      description: 'Welcome to the API documentation for Reporting Portal App.',
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: "JWT"
        }
      },
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    servers: [
      {
        url: 'https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev',
      },
      {
        url: 'http://localhost:5001',
      }
    ],
    tags: [
      {
        name: '1. User',
        description: 'Endpoints related to user CRUD',
      },
      {
        name: '2. Login',
        description: 'Endpoints related to token and refresh token',
      },
      {
        name: '3. Service Request',
        description: 'Endpoints related to service request CRUD',
      },
      {
        name: '4. Reset Password',
        description: 'Endpoints related to request and reset token',
      },
      {
        name: '5. Logout',
        description: 'Endpoints related to clear token',
      },                   
    ]
  },
  apis: ["./routes/user/index.js", "./routes/login/index.js", "./routes/serviceRequest/index.js", "./routes/reset/index.js", "./routes/logout/index.js"]
};
