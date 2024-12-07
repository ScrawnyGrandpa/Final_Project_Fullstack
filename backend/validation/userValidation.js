import Joi from "joi";
import config from "config";

const objectIdRegex = /^[0-9a-fA-F]{24}$/;
const objectIdValidator = Joi.string().regex(objectIdRegex).message('Invalid ObjectId format');
const validator = config.get("VALIDATOR");

const registerValidation = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(256).required(),
        lastName: Joi.string().min(2).max(256).required(),
        nickName: Joi.string().min(2).max(256).required(),
        email: Joi.string()
            .ruleset.pattern(
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            )
            .rule({ message: 'User "Email" must be a valid Email' })
            .required(),
        password: Joi.string()
            .ruleset.regex(
                /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
            )
            .rule({
                message:
                    'User "password" must be at least 7 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
            })
            .required(),
        avatarImgURL: Joi.string()
            .ruleset.regex(
                /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
            )
            .rule({ message: "User imageURL mast be a valid URL" })
            .allow(""),
        avatarImgALT: Joi.string().max(256).allow(""),
        likedNPCs: Joi.array().items(objectIdValidator).default([]),
        likedDungeons: Joi.array().items(objectIdValidator).default([]),
        isAdmin: Joi.boolean().allow(""),
    });
    return schema.validate(user);
};

const loginValidation = (user) => {
    const schema = Joi.object({
        email: Joi.string()
            .ruleset.pattern(
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            )
            .rule({ message: 'User "Email" must be a valid Email' })
            .required(),

        password: Joi.string()
            .ruleset.regex(
                /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
            )
            .rule({
                message:
                    'User "password" must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
            })
            .required(),
    });
    return schema.validate(user);
};

const validateRegistration = (user) => {
    if (validator === "joi") {
        const { error } = registerValidation(user);
        if (error) return error.details[0].message;
        return "";
    }
};

const validateLogin = (user) => {
    if (validator === "joi") {
        const { error } = loginValidation(user);
        if (error) return error.details[0].message;
        return "";
    }
};

export { registerValidation, loginValidation, validateRegistration, validateLogin };