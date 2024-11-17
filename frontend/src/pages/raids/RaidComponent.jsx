import React from 'react';
import { Link } from 'react-router-dom';

export default function RaidComponent({ bosses }) {
    return (
        <div className="bg-[#000000] mb-7 p-3 rounded">
            {bosses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                    {bosses.map((boss, index) => (
                        <Link key={boss._id} to={`/boss/${boss._id}`} className="relative flex items-center justify-center min-h-[450px]">
                            <img
                                src={boss.imageURL}
                                alt={boss.imageALT || boss.name}
                                className={`rounded h-full w-full object-cover 
                                    ${index === 1 ? 'object-[21%_center]' :
                                        index === 5 ? 'object-[40%_center]' :
                                            index === 7 ? 'object-[30%_center]' :
                                                'object-center'}`}
                            />
                            <h3 className="absolute text-white text-center bg-black bg-opacity-50 p-2 rounded bottom-0 w-full h-1/5 flex items-center justify-center">
                                {boss.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            ) : (
                <div>No bosses found.</div>
            )}
        </div>
    );
}