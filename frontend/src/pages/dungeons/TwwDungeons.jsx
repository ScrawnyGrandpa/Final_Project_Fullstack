import { useEffect, useState } from "react";
import { s1DungeonsList, twwDungeonsList } from "../../utils/dungeonLists";
import DungeonComponent from "./DungeonComponent";
import DungeonModel from "../../models/DungeonModel";

export default function WwwDungeons() {
    const [allDungeons, setAllDungeons] = useState([]);
    const [twwDungeons, setTwwDungeons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDungeons = async () => {
        try {
            const dungeons = await DungeonModel.loadAll();
            setAllDungeons(dungeons);

            const filteredTwwDungeons = dungeons.filter(dungeon =>
                twwDungeonsList.includes(dungeon.name)
            );
            setTwwDungeons(filteredTwwDungeons);

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
            <p className="my-3">The War Within Dungeons</p>
            <DungeonComponent dungeons={twwDungeons} />
        </>
    )
}