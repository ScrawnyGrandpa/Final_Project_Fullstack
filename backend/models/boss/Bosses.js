import mongoose from 'mongoose';
import { baseSchema } from '../trash/Trash.js';
import { IMAGEURL, DEFAULT_VALIDATION } from '../mongooseValidators.js';

const bossSchema = new mongoose.Schema({
    wowheadID: baseSchema.wowheadID,
    name: baseSchema.name,
    description: { ...DEFAULT_VALIDATION, maxlength: 2000, },
    location: baseSchema.location,
    instanceType: baseSchema.instanceType,
    imageURL: baseSchema.imageURL,
    imageALT: baseSchema.imageALT,
    phases: {
        type: Number,
        validate: {
            validator: function (input) {
                return /^\d+$/.test(input);
            },
            message: 'Phases must be a number'
        },
        default: 0
    },
    skills: baseSchema.skills
});

const Boss = mongoose.model('Boss', bossSchema);

export { Boss };