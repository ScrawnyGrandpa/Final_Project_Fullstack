import Joi from "joi";
import Schema from "./Schema";

export default class TrashSchema extends Schema {
    static fields = {
        wowheadID: {
            validation: Joi.string()
                .ruleset.regex(/^\d{5,6}$/)
                .message("Each ID must be  5-6 digits")
                .required()
        },
        name: { validation: Joi.string().min(2).max(256).required() },
        location: { validation: Joi.string().min(2).max(256).required() },
        instanceType: { validation: Joi.string().min(2).max(256).required() },
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
        skills: {
            validation: Joi.array()
                .items(Joi.string().ruleset.regex(/^\d{5,6}$/).message("Each skill must be  5-6 digits"))
                .allow([])
        }
    };
}