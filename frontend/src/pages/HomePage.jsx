import React, { useEffect, useState } from 'react';

export default function HomePage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/user'); // Adjust the URL as needed
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data; // Returns the array of users
        } catch (error) {
            console.error('Error fetching users:', error);
            return []; // Return an empty array on error
        }
    };

    useEffect(() => {
        const getUsers = async () => {
            const usersData = await fetchUsers();
            setUsers(usersData);
            setLoading(false);
        };

        getUsers().catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h2 className="text-4xl font-bold md:text-5xl lg:text-5xl mb-10">
                Welcome to ScrawnyGrandpa Guides
            </h2>
            <h5 className="text-xl">
                Here you may learn all you need about Raid Boss strategies and Dungeon strategies. Be it The War Within Dungeons or Season 1 Mythic + Dungeons.
            </h5>
            <hr className="w-[400px] mx-auto my-20" />
            <p className="text-red-500">{' '}
                {users.map((user) => (
                    <span key={user.id}>USERNAME TEST: {user.firstName} </span>
                ))}</p>

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
