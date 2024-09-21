import Joi from "joi";
import { getFieldType, isFieldRequired } from "../utils/joi";
import { capitalize } from "../utils/string";

export default class Schema {
    static fields = {};

    fields = {};

    constructor(fields = this.constructor.fields) {
        const rules = {};

        Object.keys(fields).forEach(name => {
            const { validation } = fields[name];
            const validator = Joi.object({ [name]: validation });

            this.fields[name] = {
                validate: value => validator.validate({ [name]: value }),
                type: getFieldType(validator, name),
                label: capitalize(name),
                required: isFieldRequired(validator, name),
                ...fields[name],
            };

            rules[name] = validation;
        });

        this.validator = Joi.object(rules);
    }

    validate(data) {
        const values = Object.keys(this.fields)
            .reduce((prev, name) => ({ ...prev, [name]: data[name] }), {});
        return this.validator.validate(values);
    }
}