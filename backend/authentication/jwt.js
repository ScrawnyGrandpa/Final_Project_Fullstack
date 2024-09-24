import jwt from "jsonwebtoken";

const SECRET_WORD = "aNeedlesslyLongWordAsTheNameOfAFunctionIWillNeverFindMyselfUsingInThisProject";

const generateAuthToken = (user) => {
    const payload = {
        _id: user._id,
        isAdmin: user.isAdmin,
    };

    const token = jwt.sign(payload, SECRET_WORD);
    return token;
};

const verifyToken = (tokenFromClient) => {
    try {
        const payload = jwt.verify(tokenFromClient, SECRET_WORD);
        return payload;
    } catch (error) {
        return null;
    }
};

export { generateAuthToken, verifyToken }