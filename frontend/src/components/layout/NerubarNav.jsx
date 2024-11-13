import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BossModel from '../../models/BossModel';

export default function NerubarNav() {
    const [bosses, setBosses] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchBosses = async () => {
        try {
            const allBosses = await BossModel.loadAll();
            const filteredBosses = allBosses.filter(boss => boss.location === "Nerub'ar Palace");
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

    if (loading) {
        return <div className="text-center text-lg text-gray-500">Loading bosses...</div>;
    }

    if (error) {
        return <div className="text-center text-lg text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex w-[102%] overflow-x-auto border border-gray-800">
            {bosses.length > 0 ? (
                bosses.map((boss) => (
                    <Link
                        key={boss._id}
                        to={`/boss/${boss._id}`}
                        className="p-2 text-sm font-medium hover:bg-gray-700 rounded-sm text-center flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
                        title={boss.name}
                    >
                        {boss.name}
                    </Link>
                ))
            ) : (
                <div>No bosses found for Nerub'ar Palace.</div>
            )}
        </div>
    );
}
