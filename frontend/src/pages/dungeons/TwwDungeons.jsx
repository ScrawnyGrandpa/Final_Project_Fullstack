import { useEffect, useState } from "react";
import { twwDungeonsList } from "../../utils/dungeonLists";
import DungeonComponent from "./DungeonComponent";
import DungeonModel from "../../models/DungeonModel";
import { useSearch } from "../../providers/SearchProvider";
import { useLoadCallback } from "../../providers/PageUIProvider";

export default function TwwDungeons() {
    const [allDungeons, setAllDungeons] = useState([]);
    const [twwDungeons, setTwwDungeons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { setSearchText, searchText, setShowSearch } = useSearch();

    const fetchDungeons = useLoadCallback(async () => {
        try {
            const dungeons = await DungeonModel.loadAll();
            setAllDungeons(dungeons);

            const filteredTwwDungeons = dungeons.filter(dungeon =>
                twwDungeonsList.includes(dungeon.name)
            );
            setTwwDungeons(
                filteredTwwDungeons.filter(dungeon =>
                    dungeon.name.toLowerCase().includes(searchText.toLowerCase())
                )
            );
        } catch (error) {
            console.error('Error fetching dungeons:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    });

    useEffect(() => {
        fetchDungeons();
    }, [searchText]);

    useEffect(() => {
        setSearchText("");
        setShowSearch(true);
    }, []);

    return (
        <>
            <p className="my-3">The War Within Dungeons</p>
            <DungeonComponent dungeons={twwDungeons} />
        </>
    )
}