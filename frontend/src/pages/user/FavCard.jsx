import React from 'react';
import { Link } from 'react-router-dom';

export default function FavCard({ object }) {

    const imageStyle = object.instanceType === "Dungeon"
        ? { clipPath: 'inset(15% 0 15% 0)', transform: 'scaleX(1.5) scaleY(1.5)' }
        : {};

    return (
        <div className="border-2 bg-black mb-3 rounded border-[#212930] transition-transform duration-300 ease-in-out transform scale-100 hover:scale-[1.04] hover:border-blue-500 opacity-80 hover:opacity-100">
            <Link
                key={object._id}
                to={object.skills ? `/boss/${object._id}` : `/dungeon/${object._id}`}
                className="relative flex flex-col justify-between h-full"
            >
                <div className="relative w-full h-0 pb-[60%] overflow-hidden rounded">
                    <img
                        src={object.imageURL}
                        alt={object.imageALT || object.name}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        style={imageStyle}
                    />
                </div>
                <h3 className="absolute text-white text-center bg-black bg-opacity-50 p-2 rounded bottom-0 w-full flex items-center justify-center">
                    {object.name}
                </h3>
            </Link>
        </div>
    );
}
