import HomePage from "../../pages/HomePage";

export default function MainBody({ children }) {
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