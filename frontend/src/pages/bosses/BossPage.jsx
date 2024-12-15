import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import BossModel from "../../models/BossModel";
import PageContent from "../../components/layout/PageContent";
import { useErrorCallback, useLoadEffect, usePageUI } from "../../providers/PageUIProvider";
import { SPELL, NPC } from "../../utils/wowheadLinks";
import { ROUTES } from "../../router";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import NerubarNav from "../../components/layout/NerubarNav";
import { useSearch } from "../../providers/SearchProvider";

export default function BossPage() {
    const [boss, setBoss] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const { setShowSearch } = useSearch();

    useLoadEffect(async () => {
        const boss = await BossModel.load(id);
        setBoss(boss);
    }, [id]);

    useEffect(() => {
        if (boss) {
            WH.Tooltips.refreshLinks();
        }
        setLoading(false);
    }, [boss]);

    useEffect(() => {
        setShowSearch(false);
    }, []);

    return (
        <PageContent>
            {boss && !loading && (
                <div className="flex flex-col items-center">
                    <BossBody boss={boss} />
                </div>
            )}
        </PageContent>
    );
}

export function BossBody({ boss }) {
    const navigate = useNavigate();
    const { user } = useAuthentication();
    const { setNotification } = usePageUI();
    const [isFavBoss, setIsFavBoss] = useState(user ? user.likedNPCs.includes(boss._id) : false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 550) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (user && boss) {
            setIsFavBoss(user.likedNPCs.includes(boss._id));
        }
    }, [user, boss]);

    const toggleFav = useErrorCallback(async () => {
        const updatedUser = await user.toggleLikeNPCs(boss._id);
        setIsFavBoss(updatedUser.likedNPCs.includes(boss._id));

        !isFavBoss ? setNotification({ message: "Boss added to favorites", severity: "info" }) :
            setNotification({ message: "Boss removed from favorites", severity: "error" })
    }, [boss, isFavBoss]);

    const editBoss = () => {
        navigate(`${ROUTES.BOSS_FORM}/${boss._id}`)
    }
    const editBossGuide = () => {
        navigate(`${ROUTES.BOSS_GUIDE}/${boss._id}`)
    }

    useEffect(() => {
        if (boss) {
            WH.Tooltips.refreshLinks();
        }
    }, [boss]);

    return (
        <>
            {boss.location === "Nerub'ar Palace" ? <NerubarNav /> : null}
            <div className="w-[95vw] p-6 text-white rounded-lg">
                <div>
                    {isSmallScreen ? (
                        <>
                            <h2 className="text-2xl font-bold mb-4">{boss.name}</h2>
                            {user && (
                                <div className="text-right flex flex-col gap-2">
                                    <button
                                        onClick={toggleFav}
                                        className={`${isFavBoss ? 'bg-red-600' : 'bg-gray-600'} text-white text-sm px-3 py-1 rounded`}
                                    >
                                        {isFavBoss ? "Remove from Favs" : "Add to Favs"}
                                    </button>

                                    {user?.isAdmin && (
                                        <>
                                            <button
                                                className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
                                                onClick={editBoss}
                                            >
                                                Edit Boss Info
                                            </button>
                                            <button
                                                className="bg-purple-500 text-white text-sm px-3 py-1 rounded hover:bg-purple-600 mb-2"
                                                onClick={editBossGuide}
                                            >
                                                Edit Boss Strategy Guide
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </>
                    ) : (
                        <h2 className="text-2xl font-bold mb-4 flex justify-between items-center">
                            {boss.name}
                            {user && (
                                <div className="text-right flex">
                                    <button
                                        onClick={toggleFav}
                                        className={`${isFavBoss ? 'bg-red-600' : 'bg-gray-600'} text-white text-sm px-3 py-1 rounded`}
                                    >
                                        {isFavBoss ? "Remove from Favs" : "Add to Favs"}
                                    </button>

                                    {user?.isAdmin && (
                                        <>
                                            <button
                                                className="bg-blue-500 text-white text-sm px-3 py-1 mx-2 rounded hover:bg-blue-600"
                                                onClick={editBoss}
                                            >
                                                Edit Boss Info
                                            </button>
                                            <button
                                                className="bg-purple-500 text-white text-sm px-3 py-1 rounded hover:bg-purple-600"
                                                onClick={editBossGuide}
                                            >
                                                Edit Boss Strategy Guide
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </h2>
                    )}
                </div>
                <p className="mb-2"><b>Instance:</b></p>
                <p className="mb-4">{boss.location}</p>
                <img
                    src={boss.imageURL}
                    alt={boss.name}
                    className="w-full object-contain rounded-lg mb-4"
                />
                <p className="mb-2"><b>Description:</b></p>
                <p className="mb-4">{boss.description}</p>

                {/* Strategy Guide Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Boss Strategy Guide</h2>
                    {/* Normal Phases */}
                    {boss.guide && boss.guide.normal && boss.guide.normal.length > 0 ? (
                        <div className="mt-4">
                            {boss.instanceType === "Dungeon" ? null : (<h3 className="text-green-300 text-xl font-bold mb-2">Normal Difficulty:</h3>)}
                            {boss.guide.normal.map((phaseInfo, index) => {
                                return (
                                    <div key={index} className="mb-4 p-4">
                                        <h2 className="text-cyan-200 text-2xl font-bold mb-4">{phaseInfo.phase}:</h2>
                                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                            {phaseInfo.description
                                                .replace(/\[(\d+)\]/g, (match, skillId) => {
                                                    return `<a href="${SPELL}${skillId}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">${skillId}</a>`;
                                                })
                                                .replace(/{(\d+)}/g, (match, npcId) => {
                                                    return `<a href="${NPC}${npcId}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">${npcId}</a>`;
                                                })
                                                .replace(/\n/g, '<br />')}
                                        </ReactMarkdown>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="mt-2 text-gray-500">No normal guide available or is <span className="text-red-600">under construction</span>.</p>
                    )}
                    {/* Heroic Phases */}
                    {boss.guide && boss.guide.heroic && boss.guide.heroic.length > 0 ? (
                        <div className="mt-4">
                            <h3 className="text-purple-500 text-xl font-bold mb-2">Heroic Difficulty:</h3>
                            {boss.guide.heroic.map((heroicPhase, heroicIndex) => (
                                <div key={heroicIndex} className="mb-4 p-4">
                                    <h4 className="text-cyan-200 text-2xl font-bold mb-4">{heroicPhase.phase}:</h4>
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {heroicPhase.description
                                            .replace(/\[(\d+)\]/g, (match, skillId) => {
                                                return `<a href="${SPELL}${skillId}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">${skillId}</a>`;
                                            })
                                            .replace(/{(\d+)}/g, (match, npcId) => {
                                                return `<a href="${NPC}${npcId}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">${npcId}</a>`;
                                            })
                                            .replace(/\n/g, '<br />')}
                                    </ReactMarkdown>
                                </div>
                            ))}
                        </div>
                    ) : (
                        boss.instanceType === "Dungeon" ? null : (<p className="mt-2 text-gray-500">No heroic guide available or is <span className="text-red-600">under construction</span>.</p>)
                    )}
                </div>
            </div>
        </>
    );
}
