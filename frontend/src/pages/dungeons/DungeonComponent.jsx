import React from 'react';
import { Link } from 'react-router-dom';

const classStyle = "relative flex items-center justify-center min-h-[150px] border border-[#212930] transition-transform duration-300 ease-in-out transform scale-100 hover:scale-[1.04] hover:border-blue-500 rounded-sm opacity-80 hover:opacity-100"

export default function DungeonComponent({ dungeons }) {
    return (
        <div className="bg-[#000000] mb-7 p-3 rounded">
            {dungeons.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
                    {dungeons.map((dungeon) => (
                        <Link key={dungeon._id} to={`/dungeon/${dungeon._id}`} className={classStyle}>
                            <div className="relative w-full overflow-hidden h-full">
                                <img
                                    src={dungeon.imageURL}
                                    alt={dungeon.imageALT || dungeon.name}
                                    className="rounded h-full w-full object-cover"
                                    style={{
                                        clipPath: 'inset(15% 0 15% 0)',
                                        transform: 'scaleX(1.5) scaleY(1.5)',
                                    }}
                                />
                            </div>
                            <h3 className="absolute text-white text-center bg-black bg-opacity-50 p-2 rounded bottom-0 w-full h-1/5 flex items-center justify-center">
                                {dungeon.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            ) : (
                <div>No dungeons found.</div>
            )}
        </div>
    );
}
