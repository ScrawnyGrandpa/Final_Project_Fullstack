import { Link } from "react-router-dom";
import { ROUTES } from "../../router";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import { useRef, useState, useEffect } from "react";
import { AccountMenu } from "./AccountMenu";
import DungeonModel from "../../models/DungeonModel";
import { twwDungeonsList, s1DungeonsList } from "../../utils/dungeonLists";
import FavoriteItems from "../../pages/user/FavoriteItems";

export default function Header() {
    const [allDungeons, setAllDungeons] = useState([]);
    const [twwDungeons, setTwwDungeons] = useState([]);
    const [s1Dungeons, setS1Dungeons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuthentication();
    const [openDropdown, setOpenDropdown] = useState(null);
    const twwRef = useRef(null);
    const s1Ref = useRef(null);

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

    return (
        <header className="bg-[#212930] text-white sticky top-0 z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to={ROUTES.ROOT} className="pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm">
                        Home
                    </Link>
                    <Link to={ROUTES.RAIDS} className="pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm">
                        Raids
                    </Link>

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
                                        className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2"
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
                                        className="block px-4 py-2 text-sm hover:bg-gray-700 border-t-2"
                                        key={dungeon._id}
                                        onClick={() => setOpenDropdown(null)}
                                    >
                                        {dungeon.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    {user && (
                        <Link to={ROUTES.FAVORITES} className="pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm">
                            Favorites
                        </Link>
                    )}

                    <Link to={ROUTES.ABOUT} className="pr-2 pl-2 text-md font-medium hover:bg-gray-700 px-3 py-2 rounded-sm">
                        About
                    </Link>
                </div>

                {/* (Register and Login) */}
                <div className="flex space-x-4">
                    {user ? (
                        <AccountMenu />
                    ) : (
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