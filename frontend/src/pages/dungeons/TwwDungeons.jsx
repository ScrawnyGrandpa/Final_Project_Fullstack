import { useEffect, useState } from "react";
import BossModel from "../../models/BossModel";
import BossesList from "../../utils/BossesList";

export default function TWWDungeons() {
    const [bosses, setBosses] = useState([]);
    const [loading, setLoading] = useState(true);

    const TWWDungeons = [
        "Ara-Kara, City of Echoes",
        "City of Threads",
        "Cinderbrew Meadery",
        "Darkflame Cleft",
        "Priory of the Sacred Flame",
        "The Dawnbreaker",
        "The Rookery",
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
            <p>TWW Dungeons</p>
            <div>
                <BossesList
                    bosses={bosses}
                    instanceType="Dungeon"
                    filter={TWWDungeons}
                />
            </div>
        </>
    )
}