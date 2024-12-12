import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../router";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import { useRef, useState, useEffect } from "react";
import { AccountMenu } from "./AccountMenu";
import DungeonModel from "../../models/DungeonModel";
import { twwDungeonsList, s1DungeonsList } from "../../utils/dungeonLists";
import { dungeonLinkStyle, navLinkStyle } from "../../utils/tailwindStylesHelper";
import { useSearch } from "../../providers/SearchProvider";
import SearchInput from "../helpers/SearchInput";

export default function Header() {
    const [allDungeons, setAllDungeons] = useState([]);
    const [twwDungeons, setTwwDungeons] = useState([]);
    const [s1Dungeons, setS1Dungeons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuthentication();
    const { searchText, setSearchTextDebounced, showSearch, setSearchText } = useSearch();
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const twwRef = useRef(null);
    const s1Ref = useRef(null);

    useEffect(() => {
        setSearchText("");
    }, [location, setSearchText]);

    const fetchDungeons = async () => {
        try {
            const dungeons = await DungeonModel.loadAll();
            setAllDungeons(dungeons);

            const filteredTwwDungeons = dungeons.filter(dungeon =>
                twwDungeonsList.includes(dungeon.name)
            );
            const filteredS1Dungeons = dungeons.filter(dungeon =>
                s1DungeonsList.includes(dungeon.name)
            );
            setTwwDungeons(filteredTwwDungeons);
            setS1Dungeons(filteredS1Dungeons);

        } catch (error) {
            console.error('Error fetching dungeons:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const handleClickOutside = (event) => {
        if (
            (twwRef.current && !twwRef.current.contains(event.target)) &&
            (s1Ref.current && !s1Ref.current.contains(event.target))
        ) {
            setOpenDropdown(null);
        }
    };

    useEffect(() => {
        fetchDungeons();
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMobileMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <header className="bg-[#212930] text-white sticky top-0 z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
                <div className="flex items-center lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        <div className="w-6 h-6 flex flex-col justify-between items-center pl-3">
                            <div className="w-6 h-1 bg-white"></div>
                            <div className="w-6 h-1 bg-white"></div>
                            <div className="w-6 h-1 bg-white"></div>
                        </div>
                    </button>
                </div>

                <div className={`flex lg:flex-1 ${isMenuOpen ? 'flex-col absolute top-16 left-0 w-full bg-[#212930] p-4' : 'hidden lg:flex'} lg:static`}>
                    <Link to={ROUTES.ROOT} className={navLinkStyle} onClick={isMenuOpen ? toggleMobileMenu : null}>
                        Home
                    </Link>
                    <Link to={ROUTES.RAIDS} className={navLinkStyle} onClick={isMenuOpen ? toggleMobileMenu : null}>
                        Raids
                    </Link>

                    {isMenuOpen && (
                        <>
                            <Link
                                to={ROUTES.TWWDUNGEONS}
                                className={navLinkStyle}
                                onClick={() => {
                                    setOpenDropdown(null);
                                    toggleMobileMenu();
                                }}
                            >
                                TWW Dungeons
                            </Link>
                            <Link
                                to={ROUTES.S1DUNGEONS}
                                className={navLinkStyle}
                                onClick={() => {
                                    setOpenDropdown(null);
                                    toggleMobileMenu();
                                }}
                            >
                                Season1 Dungeons
                            </Link>
                        </>
                    )}

                    {!isMenuOpen && (
                        <>
                            {/* TWW Dungeons with dropdown */}
                            <div className="relative" ref={twwRef}>
                                <button
                                    className={`pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm focus:outline-none ${openDropdown === 'TWW' ? 'text-cyan-500' : ''}`}
                                    onClick={(e) => { toggleDropdown('TWW'); e.stopPropagation(); }}
                                >
                                    TWW Dungeons
                                </button>
                                {openDropdown === 'TWW' && (
                                    <div className="absolute left-0 bg-[#212930] text-white rounded-sm w-48 shadow-lg">
                                        <Link
                                            to={ROUTES.TWWDUNGEONS}
                                            className="block px-4 py-2 text-sm bg-cyan-800 hover:bg-gray-700"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            TWW Dungeons
                                        </Link>
                                        {twwDungeons.map((dungeon) => (
                                            <Link
                                                to={`${ROUTES.DUNGEON_INFO}/${dungeon._id}`}
                                                className={dungeonLinkStyle}
                                                key={dungeon._id}
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                {dungeon.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* S1 Dungeons with dropdown */}
                            <div className="relative" ref={s1Ref}>
                                <button
                                    className={`pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm focus:outline-none ${openDropdown === 'S1' ? 'text-cyan-500' : ''}`}
                                    onClick={(e) => { toggleDropdown('S1'); e.stopPropagation(); }}
                                >
                                    S1 Dungeons
                                </button>
                                {openDropdown === 'S1' && (
                                    <div className="absolute left-0 bg-[#212930] text-white rounded-sm w-48 shadow-lg">
                                        <Link
                                            to={ROUTES.S1DUNGEONS}
                                            className="block px-4 py-2 text-sm bg-cyan-800 hover:bg-gray-700"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            Season1 Dungeons
                                        </Link>
                                        {s1Dungeons.map((dungeon) => (
                                            <Link
                                                to={`${ROUTES.DUNGEON_INFO}/${dungeon._id}`}
                                                className={dungeonLinkStyle}
                                                key={dungeon._id}
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                {dungeon.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                    {user && (
                        <Link to={ROUTES.FAVORITES} className={navLinkStyle} onClick={isMenuOpen ? toggleMobileMenu : null}>
                            Favorites
                        </Link>
                    )}
                    <Link to={ROUTES.ABOUT} className={navLinkStyle} onClick={isMenuOpen ? toggleMobileMenu : null}>
                        About
                    </Link>
                </div>
                <div className="flex space-x-4">
                    {showSearch && <SearchInput defaultValue={searchText} onChange={setSearchTextDebounced} />}
                    {user ? (
                        <AccountMenu />
                    ) : (
                        <>
                            <Link to={ROUTES.SIGNUP} className={navLinkStyle} onClick={isMenuOpen ? toggleMobileMenu : null}>
                                Register
                            </Link>
                            <Link to={ROUTES.LOGIN} className={navLinkStyle} onClick={isMenuOpen ? toggleMobileMenu : null}>
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}