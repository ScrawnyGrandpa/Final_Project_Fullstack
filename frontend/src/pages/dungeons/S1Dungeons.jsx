import { useEffect, useState } from "react";
import BossModel from "../../models/BossModel";
import BossesList from "../../utils/BossesList";

export default function S1Dungeons() {
    const [bosses, setBosses] = useState([]);
    const [loading, setLoading] = useState(true);

    const S1Dungeons = [
        "Grim Batol",
        "Siege of Boralus",
        "Mists of Tirna Scithe",
        "The Necrotic Wake",
        "Ara-Kara, City of Echoes",
        "City of Threads",
        "The Dawnbreaker",
        "The Stonevault",
    ]

    const fetchBosses = async () => {
        try {
            const allBosses = await BossModel.loadAll();
            setBosses(allBosses);
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

    return (
        <>
            <p>Season 1 Dungeons</p>
            <div>
                <BossesList
                    bosses={bosses}
                    instanceType="Dungeon"
                    filter={S1Dungeons}
                />
            </div>
        </>
    )
}