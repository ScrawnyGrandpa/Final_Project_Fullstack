import { handleError } from "../utils/handleErrors.js";

// User API Section
const checkUserAccess = (req, res, next) => {
    const reqID = req.params.id;
    const { _id, isAdmin } = req.user;

    if (!isAdmin && String(_id) !== String(reqID)) {
        return handleError(res, 403, "You don't have permission to access this user's data");
    }

    next();
};

// Boss / Trash API Section
const checkAdminAccess = (req, res, next) => {
    const { isAdmin } = req.user;

    if (!isAdmin) {
        return handleError(res, 403, "Admin access required");
    }

    next();
};

export { checkUserAccess, checkAdminAccess };
