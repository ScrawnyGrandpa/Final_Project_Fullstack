import React, { useEffect, useState } from 'react';

export default function HomePage() {
    const [users, setUsers] = useState([]);
    const [bosses, setBosses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/user');
            if (!response.ok) throw new Error('USER response was not ok');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
            setError(error.message);
            return [];
        }
    };

    const fetchBosses = async () => {
        try {
            const response = await fetch('http://localhost:3000/boss');
            if (!response.ok) throw new Error('BOSSES response was not ok');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching bosses:', error);
            setError(error.message);
            return [];
        }
    };


    useEffect(() => {
        const getUsers = async () => {
            const usersData = await fetchUsers();
            setUsers(usersData);
        };
        const getBosses = async () => {
            const bossData = await fetchBosses();
            setBosses(bossData);
        };

        getUsers();
        getBosses();
    }, []);


    useEffect(() => {
        WH.Tooltips.refreshLinks();
        console.log("I triggered refreshLinks();");

        setLoading(false);
    }, [bosses]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        !loading &&
        <>
            <h2 className="text-4xl font-bold md:text-5xl lg:text-5xl mb-10">
                Welcome to ScrawnyGrandpa Guides
            </h2>
            <h5 className="text-xl">
                Here you may learn all you need about Raid Boss strategies and Dungeon strategies. Be it The War Within Dungeons or Season 1 Mythic + Dungeons.
            </h5>
            <hr className="w-[400px] mx-auto my-20" />
            <>
                {users.map((user) => (
                    <span key={user._id}>USERNAME TEST: {user.firstName} </span>
                ))}
            </>
            <p className="text-blue-500">
                {bosses.map((boss) => (
                    <span key={boss._id}>
                        <>
                            BOSSNAME TEST: {boss.name}
                            <span>
                                Skills: {boss.skills.map((skill, index) => (
                                    <span key={index}>
                                        <a
                                            href={`https://www.wowhead.com/spell=${skill}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {skill}
                                        </a>
                                        {index < boss.skills.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </span>
                        </>
                    </span>
                ))}
            </p>

            <div className="m-3 text-xl">Current Raid: Nerub'ar Palace</div>
            <div className="bg-[#343536] h-60 mb-7 flex flex-col justify-center items-center">
                <p> Boss images and names here</p>
            </div>

            <div className="m-3 text-xl">The War Within Dungeons</div>
            <div className="bg-[#2d2a2e] h-60 mb-7 flex flex-col justify-center items-center">
                <p> Dungeon images and names here</p>
            </div>

            <div className="m-3 text-xl">Season 1 Dungeons</div>
            <div className="bg-[#343536] h-60 flex flex-col justify-center items-center">
                <p> Dungeon images and names here</p>
            </div>
        </>
    );
}
