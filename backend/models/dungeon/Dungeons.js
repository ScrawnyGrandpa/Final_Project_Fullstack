import mongoose from 'mongoose';
import { baseSchema } from '../trash/Trash.js';
import { DEFAULT_VALIDATION } from '../mongooseValidators.js';

const DungeonSchema = new mongoose.Schema({
    wowheadID: baseSchema.wowheadID,
    name: baseSchema.name,
    description: { ...DEFAULT_VALIDATION, maxlength: 2000, },
    location: baseSchema.location,
    instanceType: baseSchema.instanceType,
    imageURL: baseSchema.imageURL,
    imageALT: baseSchema.imageALT,
    NPCs: baseSchema.skills
});

const Dungeon = mongoose.model('Dungeon', DungeonSchema);

export { Dungeon };