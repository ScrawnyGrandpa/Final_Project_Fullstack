import { useEffect, useState } from "react";
import BossModel from "../../models/BossModel";
import BossesList from "../bosses/BossesList";
import { useSearch } from "../../providers/SearchProvider";

export default function Raids() {
    const [bosses, setBosses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setSearchText, searchText, setShowSearch } = useSearch();

    const fetchBosses = async () => {
        try {
            const allBosses = await BossModel.loadAll();
            setBosses(
                allBosses.filter(boss =>
                    boss.name.toLowerCase().includes(searchText.toLowerCase())
                )
            );
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setShowSearch(true);
    }, []);

    useEffect(() => {
        fetchBosses();
    }, [searchText]);

    return (
        <>
            <p>TWW Raids</p>
            <div>
                <BossesList bosses={bosses} instanceType="Raid" />
            </div>
        </>
    )
}