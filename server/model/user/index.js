import { createUser, findUserById, findAllByQuery, updateById, deleteOneByQuery, deleteManyByQuery } from "./dao/index.js";
const User = {
    createUser,
    findUserById,
    findAllByQuery,
    updateById,
    deleteOneByQuery,
    deleteManyByQuery
};
export default User;
