
export default function HomePage() {
    return (
        <>
            <h2 class="text-4xl font-bold md:text-5xl lg:text-5xl mb-10">
                Welcome to ScrawnyGrandpa Guides
            </h2>
            <h5 class="text-xl">
                Here you may learn all you need about Raid Boss strategies and Dungeon strategies. Be it The War Within Dungeons or Season 1 Mythic + Dungeons.
            </h5>
            <hr className="w-[400px] mx-auto my-20" />

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
    )
};