import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET_WORD || "thisBloodyThingLovesFailingAlot";
console.log('SECRET for signing:', SECRET);

const generateAuthToken = (user) => {
    const payload = {
        _id: user._id,
        isAdmin: user.isAdmin,
    };

    const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });
    return token;
};

const verifyToken = (tokenFromClient) => {
    try {
        const payload = jwt.verify(tokenFromClient, SECRET);
        return payload;
    } catch (error) {
        console.error('JWT verification error:', error.message);
        return null;
    }
};

export { generateAuthToken, verifyToken }