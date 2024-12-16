import Joi from "joi";
import Schema from "./Schema";

export default class TrashSchema extends Schema {
    static fields = {
        wowheadID: {
            validation: Joi.string()
                .pattern(/^\d{4,6}$/)
                .message("ID must be 4-6 digits long")
                .required(),
            placeholder: "204687 - ID must be 4-6 digits long"
        },
        name: {
            validation: Joi.string().min(2).max(256).required(),
            placeholder: ""
        },
        location: {
            validation: Joi.string().min(2).max(256).required(),
            placeholder: ""
        },
        instanceType: {
            validation: Joi.string().min(2).max(256).required(),
            placeholder: "Enter instance type (Dungeon/Raid)"
        },
        imageURL: {
            label: "Image URL",
            validation: Joi.string()
                .pattern(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/)
                .message('Image URL must be a valid URL')
                .allow(""),
            placeholder: "https://example.com/image.jpg (optional)"
        },
        imageALT: {
            label: "Image Alt",
            validation: Joi.string().min(2).max(256).allow(""),
            placeholder: "Alt text for image (optional)"
        },
        skills: {
            validation: Joi.array()
                .items(Joi.string().pattern(/^\d{5,6}$/).message("Each ID must be 5-6 digits"))
                .default(null),
            placeholder: "Enter IDs each 5-6 digits long (comma separated)"
        }
    };
}