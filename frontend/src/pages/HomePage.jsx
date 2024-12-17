import React, { useEffect, useState } from 'react';
import BossModel from "../models/BossModel";
import RaidComponent from './raids/RaidComponent';
import DungeonModel from '../models/DungeonModel';
import { s1DungeonsList, twwDungeonsList } from '../utils/dungeonLists';
import DungeonComponent from './dungeons/DungeonComponent';
import { usePageUI } from '../providers/PageUIProvider';
import { useSearch } from '../providers/SearchProvider';

export default function HomePage() {
    const [isFirstLoad, setIsFirstLoad] = useState();
    const [bosses, setBosses] = useState([]);
    const [allDungeons, setAllDungeons] = useState([]);
    const [twwDungeons, setTwwDungeons] = useState([]);
    const [s1Dungeons, setS1Dungeons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState("Nerub'ar Palace");
    const { setNotification } = usePageUI();
    const { showSearch, setShowSearch } = useSearch();

    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
        } else {
            fetchHomePage();
            setNotification({ message: "Homepage Loaded", severity: "info" });
        }
    }, []);

    const fetchHomePage = async () => {
        try {
            const allBosses = await BossModel.loadAll(true);
            const filteredBosses = allBosses.filter(boss => boss.location === location);
            setBosses(filteredBosses);

            const dungeons = await DungeonModel.loadAll(true);
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
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!loading) {
            WH.Tooltips.refreshLinks();
        }
    }, [loading]);

    useEffect(() => {
        setShowSearch(false);
    }, []);

    return (
        <>
            <h2 className="text-4xl font-bold md:text-5xl lg:text-5xl mb-10">
                Welcome to ScrawnyGrandpa Guides
            </h2>
            <h5 className="text-xl">
                Here you may learn all you need about Raid Boss strategies and Dungeon strategies. Be it The War Within Dungeons or Season 1 Mythic + Dungeons.
            </h5>
            <hr className="w-[400px] mx-auto my-10 border-cyan-600" />

            <div className="m-3 text-xl">Current Raid: {location}</div>
            <RaidComponent bosses={bosses} />

            <div className="m-3 text-xl">The War Within Dungeons</div>
            <DungeonComponent dungeons={twwDungeons} />

            <div className="m-3 text-xl">Season 1 Dungeons</div>
            <DungeonComponent dungeons={s1Dungeons} />
        </>
    );
}