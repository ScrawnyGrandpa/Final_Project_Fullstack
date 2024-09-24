import { User } from "./Users.js";
import { generateAuthToken } from "../../authentication/jwt.js";
import { createError } from "../../utils/handleErrors.js";
import { generateUserPassword } from "../../utils/bcrypt.js";
import _ from "lodash";


// register
const createUser = async (data) => {
    try {
        data.password = generateUserPassword(data.password);
        let user = new User(data);
        user = await user.save();

        return _.pick(user, ["_id", "nickName", "email"]);
    }
    catch (e) {
        return createError("Mongoose", e);
    }
};

// get all users
const getAll = async () => {
    try {
        return await User.find();
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// get user by ID
const readUser = async (id) => {
    try {
        return await User.findById(id);
    }
    catch (e) {
        return createError("Mongoose", e);
    }
};

// update user whole or some params
const updateUser = async (id, data) => {
    try {
        return await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// delete user
const deleteUser = async (id) => {
    try {
        return await User.findByIdAndDelete(id);
    } catch (e) {
        return createError("Mongoose", e);
    }
};

const login = async (email, password) => {
    try {
        const userFromDB = await User.findOne({ email });
        if (!comaprePasswords(password, userFromDB.password)) {
            const error = new Error("Authentication Error: Invalid email or password");
            error.status = 401;
            return createError("Authentication", error);
        }
        if (userFromDB.password !== password) {
            const error = new Error("Authentication Error: Invalid email or password");
            error.status = 401;
            return createError("Authentication", error);
        }

        const token = generateAuthToken(userFromDB);
        return token;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

export { createUser, getAll, readUser, updateUser, deleteUser, login };