import React from 'react';
import { Link } from 'react-router-dom';
import { classStyleDungeon, dungeonContainer, nameTagStyle } from '../../utils/tailwindStylesHelper';

export default function DungeonComponent({ dungeons }) {
    return (
        <div className="bg-[#000000] mb-7 p-3 rounded">
            {dungeons.length > 0 ? (
                <div className={dungeonContainer}>
                    {dungeons.map((dungeon) => (
                        <Link key={dungeon._id} to={`/dungeon/${dungeon._id}`} className={classStyleDungeon}>
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
                            <h3 className={nameTagStyle}>
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
