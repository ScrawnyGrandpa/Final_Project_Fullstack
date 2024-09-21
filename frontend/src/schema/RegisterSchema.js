import Joi from "joi";
import Schema from "./Schema";
import EditUserSchema from "./EditUserSchema";

export default class RegisterSchema extends Schema {
    static fields = {
        first: EditUserSchema.fields.first,
        last: EditUserSchema.fields.last,
        nickname: EditUserSchema.fields.nickname,
        email: {
            type: "email",
            validation: Joi.string()
                .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
                .rule({ message: 'user "mail" must be a valid mail' })
                .required()
        },
        password: {
            type: "password",
            validation: Joi.string()
                .ruleset.regex(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/)
                .rule({ message: 'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-' })
                .required()
        },
        avatarImgURL: EditUserSchema.fields.avatarImgURL,
        avatarImgALT: EditUserSchema.fields.avatarImgALT,
        /* isAdmin: { label: "signup as admin", validation: Joi.boolean().required() }, */
    };
}