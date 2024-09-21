import Joi from "joi";
import Schema from "./Schema";

export default class NoteSchema extends Schema {
    static fields = {
        notes: { validation: Joi.string().min(10).max(4000).required() },
    }
}