import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function Form({
    title,
    schema,
    defaultValue,
    onCancel,
    onReset,
    onChange: changeCallback,
    onSubmit: submitCallback,
}) {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState(defaultValue);

    const onChange = useCallback((name, value) => {
        if (name === 'skills' || name === 'NPCs') {
            const skillsArray = value ? value.split(',').map(skill => skill.trim()) : [];
            setData(prev => ({ ...prev, [name]: skillsArray }));
        } else {
            setData(prev => ({ ...prev, [name]: value }));
        }
    }, []);

    const validateFields = useCallback(() => {
        const { error } = schema.validate(data);
        if (error) {
            const validationErrors = {};
            error.details.forEach(err => {
                validationErrors[err.path[0]] = err.message;
            });
            setErrors(validationErrors);
            return false;
        }
        setErrors({});
        return true;
    }, [schema, data]);

    const isValid = useMemo(() => validateFields(), [validateFields]);

    const handleSubmit = useCallback((e) => {
        if (isValid) {
            submitCallback(data);
        }
    }, [data, isValid, submitCallback]);

    useEffect(() => {
        changeCallback && changeCallback(data, isValid);
    }, [data, changeCallback, isValid]);

    const renderField = (fieldName, fieldConfig) => {
        const { type, label, required } = fieldConfig;

        return (
            <div key={fieldName} className="mb-4">
                <label htmlFor={fieldName} className="block text-white mb-1">
                    {label || fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                </label>
                <input
                    id={fieldName}
                    type={type === "number" ? "number" : "text"}
                    value={data[fieldName] || ""}
                    required={required}
                    className={`border border-gray-300 p-2 w-full text-black bg-gray-100 ${errors[fieldName] ? 'border-red-500' : ''}`}
                    onChange={e => onChange(fieldName, e.target.value)}
                />
                {errors[fieldName] && (
                    <p className="text-red-500 text-sm">
                        <strong>{label || fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</strong> is required
                    </p>
                )}
            </div>
        );
    };

    return (
        <form noValidate onSubmit={handleSubmit} className="max-w-95% mx-auto">
            <h1 className="text-center text-2xl font-bold text-white mb-6">{title}</h1>
            <div>
                {Object.entries(schema.fields).map(([fieldName, fieldConfig]) => renderField(fieldName, fieldConfig))}
            </div>
            <div className="flex justify-center gap-4 mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-700 text-white py-2 px-4 rounded"
                >
                    Cancel
                </button>

                <button
                    type="button"
                    onClick={() => {
                        setErrors({});
                        setData(defaultValue);
                        if (onReset) onReset();
                    }}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                >
                    Reset
                </button>

                <button
                    type="submit"
                    className={`bg-blue-500 text-white py-2 px-4 rounded ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isValid}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

