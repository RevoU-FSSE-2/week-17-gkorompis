# [WEEK 17](http://week17.app.s3-website.ap-southeast-3.amazonaws.com/)

## 1. Project Overview
This is a simple Node.js API application that demonstrates the following deliverables:

- Functional login and logout session by implementing request cookies

- Functional request and reset password routes

- Implement RBAC ("admin", "member", "officer")

- CRUD restricted to documents that belongs to the owner

- Login limitation 5 times only for every 15 minutes window

### RBAC details
| Role    | Privilege        | Routes             | Owner |
| ------- | ---------------- | ------------------- | ----- |
| admin   | all (CRUD)       | all                | all   |
| officer | update           | all                | all   |
| member  | create, read     | all                | self  |
| member  | put (PUT)        | /user (self)       | self  |

## 2. Contents
1. [Project Overview](#1-project-overview)
2. [Contents](#2-contents)
3. [Dependencies](#3-api-documentation)
4. [Deployment](#4-dependencies)
5. [API Documentation](#5-deployment)
6. [Installation](#6-installation)

## 3. API Documentation

### [Click here for swagger documentation](https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev/api-docs/)

### Base Url

```html
     https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev
```

### Endpoints

| Endpoint         | Staging  | Required Permission | Method                                      |
|-----------------|---------|---------------------|--------------------------------------------|
| user            | dev     | required            | <code>GET</code><br><code>GET /id/:id</code><br><code>POST</code><br><code>PUT /id/:id</code><br><code>DEL /id/:id</code> |
| serviceRequest  | dev     | required            | <code>GET</code><br><code>GET /id/:id</code><br><code>POST</code><br><code>PUT /id/:id</code><br><code>DEL /id/:id</code> |
| login           | dev     | required            | <code>POST /auth</code>                             |
| logout          | dev     | required            | <code>POST /</code>                                 |



## 4. Dependencies
The project relies on the following technologies and libraries:

### Server-side:

- **API**: The API is developed using Express.js.
- **Database**: MongoDB is used as the database system.

## 5. Integration Deployment

The project is deployed as follows:

### Client-side:

- The client-side is deployed on [AWS S3 resource](http://week17.app.s3-website.ap-southeast-3.amazonaws.com/).

### Server-side:

- The [server-side](https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev) is deployed using AWS services:
  - **API Gateway**: AWS API Gateway is used to manage and expose the API.
  - **AWS Lambda**: AWS Lambda functions are used to host the server-side code.



## 6. Installation

To set up this project locally, follow these steps:

1. Clone this repository:

    ```bash
        git clone https://github.com/RevoU-FSSE-2/week-17-gkorompis.git
        cd week-17-gkorompis/server
    ```
2. Install required for server-side

    ```bash
        npm install
    ```
3. Starting Applicaiton

    ```bash
        node lambda.js
    ```
4. Deployment to AWS
    ```bash
        # "assuming aws s3, lambda function and api gateway already configured"
        chmod 700
        ./deployToAWS.sh
    ```
5. Install required for client-side
    ```
        cd week-17-gkorompis/client
        npm install
    ```
6. Deployment to AWS
    ```
        npm run build
        ./deployToAWS.sh
    ```