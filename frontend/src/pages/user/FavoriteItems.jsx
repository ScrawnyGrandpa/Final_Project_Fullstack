import React, { useEffect, useState } from 'react'
import PageContent from '../../components/layout/PageContent';
import { Navigate } from 'react-router-dom';
import { useAuthentication } from '../../providers/AuthenticationProvider';
import { useLoadCallback } from '../../providers/PageUIProvider';
import BossModel from '../../models/BossModel';
import DungeonModel from '../../models/DungeonModel';
import FavCard from './FavCard';
import { useSearch } from '../../providers/SearchProvider';

export default function FavoriteItems() {
    const [favBosses, setFavBosses] = useState([]);
    const [favDungeons, setFavDungeons] = useState([]);
    const { user } = useAuthentication();
    const { setSearchText, searchText, setShowSearch } = useSearch();

    const loadAll = useLoadCallback(async () => {
        const bosses = await BossModel.loadAll(true);
        const dungeons = await DungeonModel.loadAll(true);

        if (user && user.likedNPCs.length > 0) {
            const favBosses = bosses.filter(boss => user.likedNPCs.includes(boss._id));
            setFavBosses(favBosses.filter(boss => boss.name.toLowerCase().includes(searchText.toLowerCase())));
        }

        if (user && user.likedDungeons.length > 0) {
            const favDungeons = dungeons.filter(dungeon => user.likedDungeons.includes(dungeon._id));
            setFavDungeons(favDungeons.filter(dungeon => dungeon.name.toLowerCase().includes(searchText.toLowerCase())));
        }
    }, [user, searchText]);

    useEffect(() => {
        if (user) {
            loadAll();
        }
    }, [loadAll]);

    useEffect(() => {
        setShowSearch(true);
    }, [setShowSearch]);

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <PageContent>
            <div>
                <p>Welcome to your Favorite dungeons & bosses {user.nickName}.</p>
                <h3 className="my-3 text-purple-500 text-xl font-bold">Your Favorite Bosses:</h3>
                {favBosses.length === 0 ? (
                    <p>No bosses added to favorites.</p>
                ) : (
                    <div className="flex flex-2 flex-wrap gap-4 justify-stretch">
                        {favBosses.map((boss) => (
                            <div key={boss._id} className="w-full sm:w-1/1 md:w-1/3 lg:w-1/4 rounded gap-2">
                                <FavCard object={boss} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div>
                <h3 className="my-3 text-cyan-500 text-xl font-bold">Your Favorite Dungeons:</h3>
                {favDungeons.length === 0 ? (
                    <p>No dungeons added to favorites.</p>
                ) : (
                    <div className="flex flex-wrap gap-4">
                        {favDungeons.map((dungeon) => (
                            <div key={dungeon._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded">
                                <FavCard object={dungeon} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </PageContent>
    );
}
