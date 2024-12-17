import Joi from "joi";
import Schema from "./Schema";

export default class EditUserSchema extends Schema {
    static fields = {
        firstName: { label: "First Name", validation: Joi.string().min(2).max(256).required(), placeholder: "John" },
        lastName: { label: "Last Name", validation: Joi.string().min(2).max(256).required(), placeholder: "Doe" },
        nickName: { label: "Nickname", validation: Joi.string().min(2).max(256).required(), placeholder: "Terminator" },
        avatarImgURL: {
            label: "Avatar URL",
            validation: Joi.string()
                .ruleset.regex(/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/)
                .rule({ message: "User Image must be a valid URL" })
                .allow("")
        },
        avatarImgALT: { label: "Avatar ALT", validation: Joi.string().min(2).max(256).allow("") },
    };
}