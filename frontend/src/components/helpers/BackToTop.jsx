import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 p-3 bg-cyan-600 text-black rounded-full shadow-lg hover:bg-blue-800 hover:text-white focus:outline-none transition-all"
                aria-label="Back to top"
            >
                <AiOutlineArrowUp size={24} />
            </button>
        )
    );
};

