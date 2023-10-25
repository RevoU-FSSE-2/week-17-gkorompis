import { createServiceRequest,findServiceRequestById, findAllByQuery, updateById, deleteOneByQuery, deleteManyByQuery} from "./dao/index.js"
const ServiceRequest = {
    createServiceRequest,
    findServiceRequestById,
    findAllByQuery,
    updateById,
    deleteOneByQuery,
    deleteManyByQuery
}
export default ServiceRequest;
