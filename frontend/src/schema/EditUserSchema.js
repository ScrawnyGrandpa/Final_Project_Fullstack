import Joi from "joi";
import Schema from "./Schema";

export default class EditUserSchema extends Schema {
    static fields = {
        firstName: { label: "first name", validation: Joi.string().min(2).max(256).required() },
        lastName: { label: "last name", validation: Joi.string().min(2).max(256).required() },
        nickName: { label: "nickname", validation: Joi.string().min(2).max(256).required() },
        avatarImgURL: {
            label: "avatar url",
            validation: Joi.string()
                .ruleset.regex(/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/)
                .rule({ message: "User Image must be a valid URL" })
                .allow("")
        },
        avatarImgALT: { label: "avatar alt", validation: Joi.string().min(2).max(256).allow("") },
    };
}