import { createResetToken, findResetTokenById, findAllByQuery, updateById, deleteOneByQuery, deleteManyByQuery } from "./dao/index.js";
const ResetToken = {
    createResetToken,
    findResetTokenById,
    findAllByQuery,
    updateById,
    deleteOneByQuery,
    deleteManyByQuery
};
export default ResetToken;
