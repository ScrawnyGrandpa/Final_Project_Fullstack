import mongoose from 'mongoose';
import { IMAGEURL, DEFAULT_VALIDATION } from './mongooseValidators';

const bossSchema = new mongoose.Schema({
    wowheadID: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (input) {
                return /^\d{6}$/.test(input);
            },
            message: 'Each skill must be exactly 6 digits'
        }
    },
    name: { ...DEFAULT_VALIDATION, unique: true, },
    description: { ...DEFAULT_VALIDATION, maxlength: 2000, },
    location: DEFAULT_VALIDATION,
    imageURL: IMAGEURL,
    imageALT: DEFAULT_VALIDATION,
    phases: {
        type: Number,
        validate: {
            validator: function (input) {
                return /^\d+$/.test(input);
            },
            message: 'Phases must be a number'
        },
        default: null
    },
    skills: {
        type: [String],
        validate: {
            validator: function (input) {
                return input.every(skill => /^\d{6}$/.test(skill));
            },
            message: 'Each skill must be exactly 6 digits'
        },
        default: []
    }
});

const Boss = mongoose.model('Boss', bossSchema);

export { Boss };