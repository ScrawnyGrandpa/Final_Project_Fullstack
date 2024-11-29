import React from 'react';

const InputButton = ({
    label,
    inputValue,
    setInputValue,
    buttonLabel,
    handleButtonClick,
    placeholder
}) => {
    return (
        <div className="flex items-center mb-3">
            <input
                type="text"
                className="px-2 py-1 border rounded mr-3 text-black w-full"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
            />
            <button
                className="bg-blue-500 text-white text-sm px-3 py-1 mx-2 rounded hover:bg-purple-600 my-2 min-w-[30%]"
                onClick={handleButtonClick}
            >
                {buttonLabel}
            </button>
        </div>
    );
};

export default InputButton;
