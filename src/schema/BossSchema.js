import Joi from "joi";
import Schema from "./Schema";

export default class BossSchema extends Schema {
    static fields = {
        wowheadID: {
            validation: Joi.string()
                .ruleset.regex(/^\d{6}$/)
                .message("Each skill must be exactly 6 digits")
                .required()
        },
        name: { validation: Joi.string().min(2).max(256).required() },
        description: { validation: Joi.string().min(2).max(1024).required() },
        location: { validation: Joi.string().min(2).max(256).required() },
        imageURL: {
            label: "image url",
            validation: Joi.string()
                .ruleset.regex(/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/)
                .rule({ message: 'Image URL must be a valid URL' })
                .allow("")
        },
        imageALT: {
            label: "image alt",
            validation: Joi.string().min(2).max(256).allow("")
        },
        phases: {
            validation: Joi.number()
                .ruleset.regex(/^\d+$/)
                .message("Phases must be a number")
                .allow('', null)
        },
        skills: {
            validation: Joi.array()
                .items(Joi.string().ruleset.regex(/^\d{6}$/).message("Each skill must be exactly 6 digits"))
                .allow([])
        }
    };
}