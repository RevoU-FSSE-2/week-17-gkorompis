import {  default as userGetController } from "./getController/index.js";
import {  default as userGetOneController } from "./getOneController/index.js";
import {  default as userPostController } from "./postController/index.js";
import {  default as userPutController } from "./putController/index.js";
import {  default as userDeleteController } from "./deleteController/index.js";
import {  default as userDeleteManyController } from "./deleteManyController/index.js";

const userController = {
    userGetController,
    userGetOneController,
    userPostController,
    userPutController,
    userDeleteController,
    userDeleteManyController
}

export default userController;

