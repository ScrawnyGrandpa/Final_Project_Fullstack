import Joi from "joi";
import Schema from "./Schema";
import TrashSchema from "./TrashSchema";

export default class BossSchema extends Schema {
    static fields = {
        wowheadID: TrashSchema.fields.wowheadID,
        name: TrashSchema.fields.name,
        description: {
            validation: Joi.string().min(2).max(1024).required(), placeholder: ""
        },
        location: TrashSchema.fields.location,
        instanceType: TrashSchema.fields.instanceType,
        imageURL: TrashSchema.fields.imageURL,
        imageALT: TrashSchema.fields.imageALT,
        phases: {
            validation: Joi.number()
                .integer()
                .min(0)
                .allow(null)
                .optional(),
        },
        skills: TrashSchema.fields.skills
    };
}