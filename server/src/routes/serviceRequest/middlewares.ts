import {
    permitRole,
    authenticateToken,
    restrictCreateServiceRequest,
    setXRequestIdHeader
} from  "../../middlewares/index.js";


export const serviceRequestPostMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'member'], "serviceRequest"),
    restrictCreateServiceRequest
]
export const serviceRequestGetMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'member'], "serviceRequest"),
]
export const serviceRequestGetOneMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'member'], "serviceRequest"),
]
export const serviceRequestPutMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'officer'], "serviceRequest"),
]
export const serviceRequestDeleteMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin'], "serviceRequest"),
]
export const serviceRequestDeleteManyMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin'], "serviceRequest"),
]

