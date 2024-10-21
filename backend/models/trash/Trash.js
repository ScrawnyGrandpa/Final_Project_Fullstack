import mongoose from 'mongoose';
import { IMAGEURL, DEFAULT_VALIDATION } from '../mongooseValidators.js';


const baseSchema = {
    wowheadID: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (input) {
                return /^\d{5,6}$/.test(input);
            },
            message: 'Each skill must be 5 or 6 digits'
        }
    },
    name: DEFAULT_VALIDATION,
    location: DEFAULT_VALIDATION,
    instanceType: DEFAULT_VALIDATION,
    imageURL: IMAGEURL,
    imageALT: { ...DEFAULT_VALIDATION, minlength: 0, required: false },
    skills: {
        type: [String],
        validate: {
            validator: function (input) {
                return input.every(skill => /^\d{5,6}$/.test(skill));
            },
            message: 'Each skill must be 5 or 6 digits'
        },
        default: []
    }
};

const trashSchema = new mongoose.Schema({ ...baseSchema });
const Trash = mongoose.model("Trash", trashSchema);
export { Trash, baseSchema };