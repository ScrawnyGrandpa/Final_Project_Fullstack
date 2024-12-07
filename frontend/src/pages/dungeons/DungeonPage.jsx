import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import DungeonModel from "../../models/DungeonModel";
import PageContent from "../../components/layout/PageContent";
import { useErrorCallback, useLoadEffect } from "../../providers/PageUIProvider";
import { SPELL, NPC } from "../../utils/wowheadLinks";
import { ROUTES } from "../../router";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import BossModel from "../../models/BossModel";

export default function DungeonPage() {
    const [dungeon, setDungeon] = useState(null);
    const [dungeonBosses, setDungeonBosses] = useState([]);
    const [filteredBosses, setFilteredBosses] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useLoadEffect(async () => {
        const dungeon = await DungeonModel.load(id);
        setDungeon(dungeon);
        setDungeonBosses(dungeon.NPCs);

        const allBosses = await BossModel.loadAll();
        const bossesInDungeon = allBosses.filter(boss =>
            dungeon.NPCs.includes(boss.wowheadID)
        );
        setFilteredBosses(bossesInDungeon);
    }, [id]);

    useEffect(() => {
        if (dungeon) {
            WH.Tooltips.refreshLinks();
        }
        setLoading(false);
    }, [dungeon]);

    return (
        <PageContent>
            {dungeon && !loading && (
                <div className="flex flex-col items-center">
                    <DungeonBody dungeon={dungeon} dungeonBosses={filteredBosses} />
                </div>
            )}
        </PageContent>
    );
}

export function DungeonBody({ dungeon, dungeonBosses }) {
    const navigate = useNavigate();
    const { user } = useAuthentication();
    const [isFavDungeon, setIsFavDungeon] = useState(user.likedDungeons.includes(dungeon._id));

    useEffect(() => {
        if (user && dungeon) {
            setIsFavDungeon(user.likedDungeons.includes(dungeon._id));
        }
    }, [user, dungeon]);

    const toggleFav = useErrorCallback(async () => {
        const updatedUser = await user.toggleLikeDungeon(dungeon._id);
        setIsFavDungeon(updatedUser.likedDungeons.includes(dungeon._id));
    }, [dungeon, isFavDungeon]);

    const editDungeon = () => {
        navigate(`${ROUTES.DUNGEON_FORM}/${dungeon._id}`);
    };

    return (
        <>
            <div className="w-[95vw] p-6 text-white rounded-lg">
                <h2 className="text-2xl font-bold mb-4 flex justify-between items-center">
                    {dungeon.name}
                    {user && (
                        <div className="flex items-center">
                            <button
                                onClick={toggleFav}
                                className={`${isFavDungeon ? 'bg-red-600' : 'bg-gray-600'} text-white text-sm px-3 py-1 mx-2 rounded`}
                            >
                                {isFavDungeon ? "Remove from Favs" : "Add to Favs"}
                            </button>
                            {user?.isAdmin && (
                                <button
                                    className="bg-blue-500 text-white text-sm px-3 py-1 mx-2 rounded hover:bg-blue-600"
                                    onClick={editDungeon}
                                >
                                    Edit Dungeon Info
                                </button>
                            )}
                        </div>
                    )}
                </h2>
                <p className="mb-2"><b>Location:</b></p>
                <p className="mb-4">{dungeon.location}</p>
                <img
                    src={dungeon.imageURL}
                    alt={dungeon.name}
                    className="w-full h-[40vh] object-cover rounded-lg mb-4"
                />
                <p className="mb-2"><b>Description:</b></p>
                <p className="mb-4">{dungeon.description}</p>

                {/* Strategy Guide Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Dungeon Strategy Guide</h2>
                    {dungeonBosses && dungeonBosses.length > 0 ? (
                        dungeonBosses.map((boss) => (
                            <div key={boss._id} className="mb-8 ">
                                <Link to={`/boss/${boss._id}`} className="text-cyan-200 text-2xl font-bold mb-4">{boss.name}</Link>
                                {boss.guide && boss.guide.normal && boss.guide.normal.length > 0 ? (
                                    <div className="mt-4">
                                        {boss.guide.normal.map((phaseInfo, index) => (
                                            <div key={index} className="mb-4 p-4">
                                                <h2 className="text-cyan-200 text-2xl font-bold mb-4">
                                                    {phaseInfo.phase}:
                                                </h2>
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
                                        ))}
                                    </div>
                                ) : (
                                    <p className="mt-2 text-gray-500">No guide available for this boss.</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="mt-2 text-gray-500">No bosses found in this dungeon.</p>
                    )}
                </div>
            </div>
        </>
    );
}