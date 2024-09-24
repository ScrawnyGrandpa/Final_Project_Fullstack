import { handleError, createError } from "../utils/handleErrors.js";
import { verifyToken } from "./jwt.js";

const tokenGenerator = "jwt";

const authentication = (req, res, next) => {
    if (tokenGenerator === "jwt") {
        try {
            const tokenFromClient = req.header("x-auth-token");
            if (!tokenFromClient) {
                const error = new Error("Please Login");
                error.status = 401;
                return createError("Authentication", error);
            }
            const userInfo = verifyToken(tokenFromClient);
            if (!userInfo) {
                const error = new Error("Unauthorized user");
                error.status = 401;
                return createError("Authentication", error);
            }
            req.user = userInfo;
            return next();
        } catch (error) {
            return handleError(res, 401, error.message);
        }
    }
    return handleError(res, 500, "Invalid Token Generator")
};

export { authentication };