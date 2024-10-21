import { User } from "./Users.js";
import { generateAuthToken } from "../../authentication/jwt.js";
import { createError } from "../../utils/handleErrors.js";
import { generateUserPassword } from "../../utils/bcrypt.js";
import { comparePasswords } from "../../utils/bcrypt.js";
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
        const users = await User.find();
        return users.map(user => _.pick(user.toObject(), ["firstName", "lastName", "nickName", "avatarImgURL", "createdAt"]));
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// get user by ID
const readUser = async (id) => {
    try {
        return _.omit((await User.findById(id)).toObject(), ["password"]);
    }
    catch (e) {
        return createError("Mongoose", e);
    }
};

// update user whole or some params
const updateUser = async (id, data) => {
    try {
        return _.omit((await User.findByIdAndUpdate(id, data, { new: true, runValidators: true })).toObject(), ["password"]);
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// patch user param
const patchUser = async (id, data) => {
    try {
        return _.omit((await User.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
            overwrite: false,
        })).toObject(), ["password"]);
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// delete user
const deleteUser = async (id) => {
    try {
        return _.omit((await User.findByIdAndDelete(id)).toObject(), ["password"]);
    } catch (e) {
        return createError("Mongoose", e);
    }
};

const login = async (email, password) => {
    try {
        const userFromDb = await User.findOne({ email });

        if (!userFromDb) {
            const error = new Error("Invalid email or password");
            error.status = 401;
            return createError("Authentication", error);
        }
        if (!comparePasswords(password, userFromDb.password)) {
            const error = new Error("Invalid email or password");
            error.status = 401;
            return createError("Authentication", error);
        }
        const token = generateAuthToken(userFromDb);
        return token;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

export { createUser, getAll, readUser, updateUser, patchUser, deleteUser, login };