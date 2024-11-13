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
        default: 0,
    },
    skills: baseSchema.skills,
    guide: {
        normal: {
            type: [{
                phase: {
                    type: String,
                },
                description: {
                    type: String,
                    minlength: 2,
                    maxlength: 7000,
                    trim: true,
                    default: '',
                }
            }],
            default: []
        },
        heroic: {
            type: [{
                phase: {
                    type: String,
                },
                description: {
                    type: String,
                    minlength: 2,
                    maxlength: 7000,
                    trim: true,
                    default: '',
                }
            }],
            default: []
        }
    }
});

const Boss = mongoose.model('Boss', bossSchema);

export { Boss };