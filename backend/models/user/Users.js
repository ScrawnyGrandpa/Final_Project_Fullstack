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
    avatarImgALT: { ...DEFAULT_VALIDATION, minlength: 0, required: false },
    likedNPCs: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Boss',
        validate: {
            validator: function (value) {
                return value.every(id => mongoose.Types.ObjectId.isValid(id));
            },
            message: 'Each item in likedNPCs must be a valid ObjectId.',
        },
    },
    likedDungeons: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Dungeon',
        validate: {
            validator: function (value) {
                return value.every(id => mongoose.Types.ObjectId.isValid(id));
            },
            message: 'Each item in likedDungeons must be a valid ObjectId.',
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