import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BossModel from "../models/BossModel";

export default function HomePage() {
    const [bosses, setBosses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBosses = async () => {
        try {
            const allBosses = await BossModel.loadAll();
            const filteredBosses = allBosses.filter(
                boss => boss.location == "Nerub'ar Palace"
            );
            setBosses(filteredBosses);
        } catch (error) {
            console.error('Error fetching bosses:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBosses();
    }, []);

    useEffect(() => {
        if (!loading) {
            WH.Tooltips.refreshLinks();
            console.log("I triggered refreshLinks();");
        }
    }, [loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h2 className="text-4xl font-bold md:text-5xl lg:text-5xl mb-10">
                Welcome to ScrawnyGrandpa Guides
            </h2>
            <h5 className="text-xl">
                Here you may learn all you need about Raid Boss strategies and Dungeon strategies. Be it The War Within Dungeons or Season 1 Mythic + Dungeons.
            </h5>
            <hr className="w-[400px] mx-auto my-20" />

            <div className="m-3 text-xl">Current Raid: Nerub'ar Palace</div>
            <div className="bg-[#000000] mb-7 p-3 rounded">
                {bosses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                        {bosses.map((boss, index) => (
                            <Link key={boss._id} to={`/boss/${boss._id}`} className="relative flex items-center justify-center min-h-[450px]">
                                <img
                                    src={boss.imageURL}
                                    alt={boss.imageALT || boss.name}
                                    className={`rounded h-full w-full object-cover 
                                    ${index === 1 ? 'object-[21%_center]' :
                                            index === 5 ? 'object-[40%_center]' :
                                                index === 7 ? 'object-[30%_center]' :
                                                    'object-center'}`}
                                />
                                <h3 className="absolute text-white text-center bg-black bg-opacity-50 p-2 rounded bottom-0 w-full h-1/5 flex items-center justify-center">
                                    {boss.name}
                                </h3>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div>No bosses found in Nerub'ar Palace (Raid).</div>
                )}
            </div>





            <div className="m-3 text-xl">The War Within Dungeons</div>
            <div className="bg-[#2d2a2e] h-60 mb-7 flex flex-col justify-center items-center">
                <p> Dungeon images and names here</p>
            </div>

            <div className="m-3 text-xl">Season 1 Dungeons</div>
            <div className="bg-[#343536] h-60 flex flex-col justify-center items-center">
                <p> Dungeon images and names here</p>
            </div>
        </>
    );
}
