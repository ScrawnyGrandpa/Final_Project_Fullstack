import mongoose from "mongoose";
import { EMAIL, IMAGEURL, NICKNAME, DEFAULT_VALIDATION } from "../mongooseValidators.js"

const userSchema = new mongoose.Schema({
    firstName: DEFAULT_VALIDATION,
    lastName: DEFAULT_VALIDATION,
    nickName: NICKNAME,
    email: EMAIL,
    password: {
        type: String,
        required: true,
        trim: true,
    },
    avatarImgURL: IMAGEURL,
    avatarImgALT: { ...DEFAULT_VALIDATION, required: false },
    likedNPCs: {
        type: [String],
        validate: {
            validator: function (input) {
                return input.every(skill => /^\d{6}$/.test(skill));
            },
            message: 'Each NPC-ID must be exactly 6 digits'
        },
        default: []
    },
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