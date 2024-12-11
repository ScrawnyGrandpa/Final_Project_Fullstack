import React from 'react';
import { Link } from 'react-router-dom';
import { classStyle, containerStyle, nameTagStyle } from '../../utils/tailwindStylesHelper';

export default function RaidComponent({ bosses }) {
    return (
        <div className="bg-[#000000] mb-7 p-3 rounded">
            {bosses.length > 0 ? (
                <div className={containerStyle}>
                    {bosses.map((boss, index) => (
                        <Link key={boss._id} to={`/boss/${boss._id}`} className={classStyle}>
                            <img
                                src={boss.imageURL}
                                alt={boss.imageALT || boss.name}
                                className={`rounded h-full w-full object-cover 
                                    ${index === 1 ? 'object-[21%_center]' :
                                        index === 5 ? 'object-[40%_center]' :
                                            index === 7 ? 'object-[30%_center]' :
                                                'object-center'}`}
                            />
                            <h3 className={nameTagStyle}>
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