export function isFieldRequired(schema, fieldName) {
    const fieldSchema = getFieldSchema(schema, fieldName);
    return fieldSchema?._flags?.presence == "required";
}

export function getFieldType(schema, fieldName) {
    const fieldSchema = getFieldSchema(schema, fieldName);
    return fieldSchema?.type;
}

export function getFieldSchema(schema, fieldName) {
    return schema._ids._byKey.get(fieldName).schema;
}