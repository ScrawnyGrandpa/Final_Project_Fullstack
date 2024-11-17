import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MainBody({ children }) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 flex justify-center w-full h-full bg-[#1a1b1b] text-[white] pt-8">
                <div className="flex flex-col max-w-[90%]">
                    {children}
                </div>
            </main>
        </div>
    )
};