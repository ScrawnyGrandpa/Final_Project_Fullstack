import React from 'react';

export default function Popup({ isOpen, closePopup, imageSrc }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="border-2 border-[#212930] bg-black bg-opacity-85 p-10 rounded-lg relative max-w-[700px]">
                <button
                    className="absolute top-1 right-4 text-[30px] font-bold"
                    onClick={closePopup}
                >
                    &times;
                </button>
                <img src={imageSrc} alt="Popup Content" className="w-full h-auto rounded-lg" />
            </div>
        </div>
    );
};
