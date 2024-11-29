import { useEffect, useState } from "react";
import { s1DungeonsList } from "../../utils/dungeonLists";
import DungeonComponent from "./DungeonComponent";
import DungeonModel from "../../models/DungeonModel";

export default function S1Dungeons() {
    const [allDungeons, setAllDungeons] = useState([]);
    const [s1Dungeons, setS1Dungeons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDungeons = async () => {
        try {
            const dungeons = await DungeonModel.loadAll();
            setAllDungeons(dungeons);

            const filteredS1Dungeons = dungeons.filter(dungeon =>
                s1DungeonsList.includes(dungeon.name)
            );
            setS1Dungeons(filteredS1Dungeons);

        } catch (error) {
            console.error('Error fetching dungeons:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDungeons();
    }, []);

    return (
        <>
            <p className="my-3">Season 1 Dungeons</p>
            <DungeonComponent dungeons={s1Dungeons} />
        </>
    )
}