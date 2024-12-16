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
    const [isAdmin, setIsAdmin] = useState(false);

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
        e.preventDefault();
        if (isValid) {
            const submissionData = { ...data };
            if (title === "Register" && isAdmin) {
                submissionData.isAdmin = true;
            }
            submitCallback(submissionData);
        }
    }, [data, isAdmin, isValid, submitCallback, title]);

    useEffect(() => {
        changeCallback && changeCallback(data, isValid);
    }, [data, changeCallback, isValid]);

    const renderField = (fieldName, fieldConfig) => {
        const { type, label, required, placeholder } = fieldConfig;
        const inputType = type === "password" ? "password" : type === "number" ? "number" : "text";

        return (
            <div key={fieldName} className="mb-4">
                <label htmlFor={fieldName} className="block text-white mb-1">
                    {label || fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                </label>
                <input
                    id={fieldName}
                    type={inputType}
                    value={data[fieldName] || ""}
                    required={required}
                    placeholder={placeholder || ""}
                    className={`border border-cyan-700 p-2 w-full text-white rounded bg-gray-800 placeholder-opacity-60 placeholder-gray-500 ${errors[fieldName] ? 'border-red-500' : ''}`}
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


    const renderAdminCheckbox = () => {
        if (title === "Register") {
            return (
                <div className="mb-4 flex items-center">
                    <label htmlFor="isAdmin" className="block text-white mb-1 mr-2">
                        Register as Admin
                    </label>
                    <input
                        id="isAdmin"
                        type="checkbox"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                        className="border border-cyan-700 p-2 text-white rounded bg-gray-800"
                    />
                </div>
            );
        }
        return null;
    };


    return (
        <form noValidate onSubmit={handleSubmit} className="max-w-95% mx-auto">
            <h1 className="text-center text-2xl font-bold text-white mb-6">{title}</h1>
            <div>
                {Object.entries(schema.fields).map(([fieldName, fieldConfig]) => renderField(fieldName, fieldConfig))}
                {renderAdminCheckbox()}
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
