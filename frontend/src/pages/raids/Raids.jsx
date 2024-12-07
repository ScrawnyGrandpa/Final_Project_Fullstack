import { useEffect, useState } from "react";
import BossModel from "../../models/BossModel";
import BossesList from "../bosses/BossesList";

export default function Raids() {
    const [bosses, setBosses] = useState([]);
    const [loading, setLoading] = useState(true);


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
            <p>TWW Raids</p>
            <div>
                <BossesList bosses={bosses} instanceType="Raid" />
            </div>
        </>
    )
}