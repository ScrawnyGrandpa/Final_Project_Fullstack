import React, { useEffect, useState } from 'react';
import BossModel from "../models/BossModel";
import RaidComponent from './raids/RaidComponent';

export default function HomePage() {
    const [bosses, setBosses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState("Nerub'ar Palace");

    const fetchBosses = async () => {
        try {
            const allBosses = await BossModel.loadAll();
            const filteredBosses = allBosses.filter(
                boss => boss.location == location
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
            console.log(bosses);
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
            <hr className="w-[400px] mx-auto my-16" />

            <div className="m-3 text-xl">Current Raid: {location}</div>
            <RaidComponent bosses={bosses} />

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

