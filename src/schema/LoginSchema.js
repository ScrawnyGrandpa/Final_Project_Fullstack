import Joi from "joi";
import Schema from "./Schema";

export default class LoginSchema extends Schema {
    static fields = {
        email: {
            type: "email",
            validation: Joi.string()
                .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
                .rule({ message: "Please enter a valid mail" })
                .required(),
            grid: 12,
        },
        password: {
            type: "password",
            validation: Joi.string()
                .ruleset.regex(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/)
                .rule({ message: "The password must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-" })
                .required(),
            grid: 12,
        },
    };
}