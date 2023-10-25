import { default as serviceRequestGetController } from "./getController/index.js";
import { default as serviceRequestGetOneController } from "./getOneController/index.js";
import { default as serviceRequestPostController } from "./postController/index.js";
import { default as serviceRequestPutController } from "./putController/index.js";
import { default as serviceRequestDeleteController } from "./deleteController/index.js";
import { default as serviceRequestDeleteManyController } from "./deleteManyController/index.js";
const serviceRequestController = {
    serviceRequestGetController,
    serviceRequestGetOneController,
    serviceRequestPostController,
    serviceRequestPutController,
    serviceRequestDeleteController,
    serviceRequestDeleteManyController
};
export default serviceRequestController;
