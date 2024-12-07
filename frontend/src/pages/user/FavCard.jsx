import React from 'react';
import { Link } from 'react-router-dom';

export default function FavCard({ object }) {
    return (
        <div className="border-2 border-black bg-black mb-3 rounded">
            <Link
                key={object._id}
                to={object.skills ? `/boss/${object._id}` : `/dungeon/${object._id}`}
                className="relative flex flex-col justify-between h-full"
            >
                {/* Fixed aspect ratio container */}
                <div className="relative w-full h-0 pb-[60%] overflow-hidden rounded">
                    <img
                        src={object.imageURL}
                        alt={object.imageALT || object.name}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>

                {/* Name label */}
                <h3 className="absolute text-white text-center bg-black bg-opacity-50 p-2 rounded bottom-0 w-full flex items-center justify-center">
                    {object.name}
                </h3>
            </Link>
        </div>
    );
}