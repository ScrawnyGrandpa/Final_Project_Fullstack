import React, { useEffect, useState } from 'react';
import BossModel from "../models/BossModel";
import RaidComponent from './raids/RaidComponent';
import DungeonModel from '../models/DungeonModel';
import DungeonComponent from './dungeons/DungeonComponent';
import { usePageUI } from '../providers/PageUIProvider';
import { useSearch } from '../providers/SearchProvider';

export default function AllCollectionsData() {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [raidBosses, setRaidBosses] = useState([]);
    const [dungBosses, setDungBosses] = useState([]);
    const [allDungeons, setAllDungeons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { setNotification } = usePageUI();
    const { searchText, setShowSearch } = useSearch();

    const fetchData = async () => {
        try {
            const allBosses = await BossModel.loadAll();
            const filteredRaidBosses = allBosses.filter(boss =>
                boss.instanceType === "Raid" && boss.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setRaidBosses(filteredRaidBosses);

            const filteredDungBosses = allBosses.filter(boss =>
                boss.instanceType === "Dungeon" && boss.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setDungBosses(filteredDungBosses);

            const allDungeons = await DungeonModel.loadAll();
            const filteredDungeons = allDungeons.filter(dungeon =>
                dungeon.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setAllDungeons(filteredDungeons);
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
        setShowSearch(true);
    }, [setShowSearch]);

    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
        } else {
            fetchData();
            setNotification({ message: "Data Loaded", severity: "info" });
        }
    }, [searchText, isFirstLoad, setNotification]);

    return (
        <>
            <h2 className="mb-2 font-bold text-purple-500">
                Here you may find the entire database of available dungeons, dungeon-bosses, and raid-bosses.
            </h2>

            <div className="m-3 text-xl">All Available Raid-Bosses</div>
            {raidBosses.length === 0 ? (
                <p className="ml-4 text-gray-400 text-sm">No Raid Bosses found in search.</p>
            ) : (
                <RaidComponent bosses={raidBosses} />
            )}

            <div className="m-3 text-xl">All Available Dungeons</div>
            {allDungeons.length === 0 ? (
                <p className="ml-4 text-gray-400 text-sm">No Dungeons found in search.</p>
            ) : (
                <DungeonComponent dungeons={allDungeons} />
            )}

            <div className="m-3 text-xl">All Available Dungeon-Bosses</div>
            {dungBosses.length === 0 ? (
                <p className="ml-4 text-gray-400 text-sm">No Dungeon Bosses found in search.</p>
            ) : (
                <RaidComponent bosses={dungBosses} />
            )}
        </>
    );
}