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
                className="border-cyan-700 text-white bg-gray-800 rounded-sm py-2 pl-4 pr-10 text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 w-full h-full"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
            />
            <button
                className="bg-cyan-800 text-white text-sm px-3 py-2 mx-2 rounded-sm hover:bg-purple-600 my-2 min-w-[30%] h-full"
                onClick={handleButtonClick}
            >
                {buttonLabel}
            </button>
        </div>
    );
};

export default InputButton;
