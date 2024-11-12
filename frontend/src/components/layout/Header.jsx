import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import { useRef, useState } from "react";
import { Settings, Logout } from "@mui/icons-material";

export default function Header() {
    const { user } = useAuthentication();
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <header className="bg-[#212930] text-white sticky top-0 z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to={ROUTES.ROOT} className="pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm">
                        Home
                    </Link>
                    <Link to={ROUTES.RAIDS} className="pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm">
                        Raids
                    </Link>

                    {/* TWW Dungeons with dropdown */}
                    <div className="relative">
                        <button
                            className={`pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm focus:outline-none ${openDropdown === 'TWW' ? 'text-cyan-500' : ''}`}
                            onClick={() => toggleDropdown('TWW')}
                        >
                            TWW Dungeons
                        </button>
                        {openDropdown === 'TWW' && (
                            <div className="absolute left-0 mt-2 space-y-2 bg-[#212930] text-white rounded-sm w-48 shadow-lg">
                                <Link to={ROUTES.TWWDUNGEONS} className="block px-4 py-2 text-sm bg-cyan-800 hover:bg-gray-700">
                                    TWW Dungeons
                                </Link>
                                <Link to={ROUTES.ARA_KARA_ECHOES} className="block px-4 py-2 text-sm hover:bg-gray-700">
                                    Ara-Kara City of Echoes
                                </Link>
                                <Link to={ROUTES.CITY_OF_THREADS} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    City of Threads
                                </Link>
                                <Link to={ROUTES.MEADERY} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    Cinderbrew Meadery
                                </Link>
                                <Link to={ROUTES.DARKFLAME_CLEFT} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    Darkflame Cleft
                                </Link>
                                <Link to={ROUTES.PRIORY} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    Priory of the Sacred Flame
                                </Link>
                                <Link to={ROUTES.THE_DAWNBREAKER} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    The Dawnbreaker
                                </Link>
                                <Link to={ROUTES.THE_ROOKERY} className="block px-4 py-2 text-sm hover:bg-gray-700  border-t-2">
                                    The Rookery
                                </Link>
                                <Link to={ROUTES.THE_STONEVAULT} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    The Stonevault
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* S1 Dungeons with dropdown */}
                    <div className="relative">
                        <button
                            className={`pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm focus:outline-none ${openDropdown === 'S1' ? 'text-cyan-500' : ''}`}
                            onClick={() => toggleDropdown('S1')}
                        >
                            S1 Dungeons
                        </button>
                        {openDropdown === 'S1' && (
                            <div className="absolute left-0 mt-2 space-y-2 bg-[#212930] text-white rounded-sm w-48 shadow-lg">
                                <Link to={ROUTES.S1DUNGEONS} className="block px-4 py-2 text-sm bg-cyan-800 hover:bg-gray-700">
                                    Season1 Dungeons
                                </Link>
                                <Link to={ROUTES.GRIM_BATOL} className="block px-4 py-2 text-sm hover:bg-gray-700 ">
                                    Grim Batol
                                </Link>
                                <Link to={ROUTES.SIEGE} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    Siege of Boralus
                                </Link>
                                <Link to={ROUTES.MISTS} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    Mists of Tirna Scithe
                                </Link>
                                <Link to={ROUTES.NECROTIC_WAKE} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    The Necrotic Wake
                                </Link>
                                <Link to={ROUTES.ARA_KARA_ECHOES} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    Ara-Kara City of Echoes
                                </Link>
                                <Link to={ROUTES.CITY_OF_THREADS} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    City of Threads
                                </Link>
                                <Link to={ROUTES.THE_DAWNBREAKER} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    The Dawnbreaker
                                </Link>
                                <Link to={ROUTES.THE_STONEVAULT} className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2">
                                    The Stonevault
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to={ROUTES.ABOUT} className="pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm">
                        About
                    </Link>
                    <Link to={ROUTES.ABOUT} className="pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm">
                        Contact
                    </Link>
                </div>

                {/* (Register and Login) */}
                <div className="flex space-x-4">
                    {user ?
                        <AccountMenu />
                        :
                        (
                            <>
                                <Link to={ROUTES.SIGNUP} className="pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm">
                                    Register
                                </Link>
                                <Link to={ROUTES.LOGIN} className="pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm">
                                    Login
                                </Link>
                            </>
                        )}
                </div>
            </nav>
        </header>
    );
}

export function AccountMenu() {
    const anchor = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuthentication();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    const userProfile = () => {
        navigate(ROUTES.USER_PROFILE);
    };

    return (
        <>
            <button
                className="p-0 focus:outline-none"
                onClick={toggleMenu}
                ref={anchor}
                aria-label="User Settings"
            >
                <img
                    src={user.avatarImgURL || "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                />
            </button>

            {/* Menu dropdown */}
            {isOpen && (
                <div
                    className="absolute mt-2 w-50 bg-[#212930] shadow-lg rounded-sm z-50"
                    style={{
                        top: (anchor.current?.getBoundingClientRect().bottom || 0) + 20,
                        left: (anchor.current?.getBoundingClientRect().left || 0) - 150, // Subtract 200px from the left position
                    }}
                    onClick={closeMenu}
                >
                    <div className="p-3 flex items-center space-x-2">
                        <img
                            src={user.avatarImgURL || "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"}
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm">{user.email}</span>
                    </div>
                    <hr className="border-t border-gray-200" />
                    <button
                        onClick={userProfile}
                        className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
                    >
                        <Settings fontSize="small" className="mr-2" />
                        User Profile
                    </button>
                    <button
                        onClick={logout}
                        className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
                    >
                        <Logout fontSize="small" className="mr-2" />
                        Logout
                    </button>
                </div>
            )}
        </>
    );
}