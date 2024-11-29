import Joi from "joi";
import Schema from "./Schema";

export default class TrashSchema extends Schema {
    static fields = {
        wowheadID: {
            validation: Joi.string()
                .pattern(/^\d{4,6}$/)
                .message("Each ID must be 4-6 digits")
                .required()
        },
        name: { validation: Joi.string().min(2).max(256).required() },
        location: { validation: Joi.string().min(2).max(256).required() },
        instanceType: { validation: Joi.string().min(2).max(256).required() },
        imageURL: {
            label: "Image URL",
            validation: Joi.string()
                .pattern(/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/)
                .message('Image URL must be a valid URL')
                .allow("")
        },
        imageALT: {
            label: "Image Alt",
            validation: Joi.string().min(2).max(256).allow("")
        },
        skills: {
            validation: Joi.array()
                .items(Joi.string().pattern(/^\d{5,6}$/).message("Each skill must be 5-6 digits"))
                .default(null)
        }
    };
}
