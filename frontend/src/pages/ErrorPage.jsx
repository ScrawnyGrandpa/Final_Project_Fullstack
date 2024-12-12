import React, { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSearch } from "../providers/SearchProvider";

export default function ErrorPage() {
    const navigate = useNavigate();
    const { setShowSearch } = useSearch();

    useEffect(() => {
        setShowSearch(false);
    }, []);

    return (
        <div className="bg-[#1a1b1b] text-white h-screen flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-cyan-300 mb-6">404</h1>
                <h2 className="text-2xl font-semibold text-gray-400 mb-4">Page Not Found</h2>
                <p className="text-lg text-gray-500 mb-6">Sorry, the page you're looking for doesn't exist or has been moved.</p>
                <div className="flex justify-center items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-colors"
                    >
                        <FaHome />
                        <span>Go Back to Home</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
