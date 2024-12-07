import React from 'react';
import { Link } from 'react-router-dom';

export default function BossesList({ bosses, instanceType = "Raid", filter = [] }) {
    const groupedByLocation = bosses.reduce((acc, boss) => {
        if ((!instanceType || boss.instanceType === instanceType) &&
            (filter.length === 0 || filter.includes(boss.location))) {
            if (!acc[boss.location]) {
                acc[boss.location] = [];
            }
            acc[boss.location].push(boss);
        }
        return acc;
    }, {});

    return (
        <div className="mb-7 p-3 rounded">
            {Object.keys(groupedByLocation).length > 0 ? (
                Object.keys(groupedByLocation).map((location) => {
                    const bossesAtLocation = groupedByLocation[location];
                    const hasValidBosses = bossesAtLocation.some(boss => boss.instanceType === instanceType);
                    if (!hasValidBosses) return null;

                    return (
                        <div key={location} className="mb-2 p-3 rounded bg-black">
                            <h2 className="text-white text-xl mb-3">{location}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                                {bossesAtLocation.map((boss, index) => (
                                    <Link
                                        key={boss._id}
                                        to={`/boss/${boss._id}`}
                                        className="relative flex items-center justify-center min-h-[350px]"
                                    >
                                        <img
                                            src={boss.imageURL}
                                            alt={boss.imageALT || boss.name}
                                            className={`rounded h-full w-full object-cover 
        ${boss.location === "Nerub'ar Palace"
                                                    ? `${index === 1 ? 'object-[21%_center]' :
                                                        index === 5 ? 'object-[40%_center]' :
                                                            index === 7 ? 'object-[30%_center]' :
                                                                'object-center'}`
                                                    : 'object-center'}`}
                                        />
                                        <h3 className="absolute text-white text-center 
                                            bg-black bg-opacity-50 p-2 rounded bottom-0 w-full 
                                            h-1/5 flex items-center justify-center">
                                            {boss.name}
                                        </h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>No bosses found for this instance type.</div>
            )}
        </div>
    );
}
