import mongoose from "mongoose";
import { EMAIL, IMAGEURL, NICKNAME, DEFAULT_VALIDATION } from "./mongooseValidators.js"

const userSchema = new mongoose.Schema({
    firstName: DEFAULT_VALIDATION,
    lastName: DEFAULT_VALIDATION,
    nickName: NICKNAME,
    email: EMAIL,
    avatarImgURL: IMAGEURL,
    avatarImgALT: DEFAULT_VALIDATION,
    isAdmin: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);

export { User };