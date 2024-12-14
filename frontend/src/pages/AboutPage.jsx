import { useEffect } from "react";
import PageContent from "../components/layout/PageContent";
import { useSearch } from "../providers/SearchProvider";

export default function AboutPage() {
    const { setShowSearch } = useSearch();

    useEffect(() => {
        setShowSearch(false);
    }, []);

    return (
        <>
            <PageContent>
                <div className="flex flex-col gap-3">
                    <h3 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl mb-6">
                        About Us
                    </h3>
                    <div className="text-lg font-normal lg:text-xl mb-8">
                        Welcome to ScrawnyGrandpa Guides, your ultimate destination for World of Warcraft strategies and insights! We're dedicated to bringing you the most up-to-date and comprehensive guides on the latest expansion's raid bosses, dungeons, and Mythic+ content. Whether you're a seasoned raider or a new adventurer, our expert guides and detailed strategies are designed to help you conquer Azeroth's toughest challenges. Join our community of passionate players and stay ahead of the curve with tips and tactics that will elevate your gameplay. Let us be your go-to source for all things WoW!
                    </div>

                    <h3 className="text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl mb-6">
                        What You May Find on Our Website
                    </h3>

                    {/* Raids Section */}
                    <div className="flex flex-col md:flex-row items-center mb-8 gap-8">
                        <div className="w-full md:w-1/3">
                            <img
                                src="/assets/raids.png"
                                alt="Raids"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-full md:w-2/3 text-lg">
                            <h4 className="text-2xl font-bold mb-3">Raids</h4>
                            <p>
                                Our raid section is the heart of our content, designed for both newcomers and seasoned veterans. Explore detailed guides for all raid bosses, including strategies for both Normal and Heroic difficulty modes. Each guide breaks down the boss mechanics in simple steps, with links to key abilities and tips for success. You'll also find maps and locations for each encounter to help you prepare for every challenge.
                            </p>
                        </div>
                    </div>

                    {/* Expansion Dungeons Section */}
                    <div className="flex flex-col md:flex-row items-center mb-8 gap-8">
                        <div className="w-full md:w-1/3">
                            <img
                                src="/assets/currentDungeons.png"
                                alt="Dungeons"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-full md:w-2/3 text-lg">
                            <h4 className="text-2xl font-bold mb-3">Expansion Dungeons</h4>
                            <p>
                                Dive deep into the world of expansion dungeons with comprehensive walkthroughs for each dungeon. We cover everything from trash mobs to final bosses, providing you with the tactics needed for victory. Whether it's gearing up for a fresh dungeon run or optimizing your strategy for tougher challenges, we've got you covered. Each dungeon guide also includes tips on how to navigate and locate these dungeons, making sure you never get lost!
                            </p>
                        </div>
                    </div>

                    {/* Seasonal Dungeons Section */}
                    <div className="flex flex-col md:flex-row items-center mb-8 gap-8">
                        <div className="w-full md:w-1/3">
                            <img
                                src="/assets/seasonDungeons.png"
                                alt="Seasonal Dungeons"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-full md:w-2/3 text-lg">
                            <h4 className="text-2xl font-bold mb-3">Seasonal Dungeons</h4>
                            <p>
                                Seasonal dungeons are always an exciting challenge, and we make sure you're prepared for the unique twists they bring. Our guides feature detailed explanations of seasonal mechanics, events, and limited-time features, ensuring you're always up-to-date. We also provide tips on how to tackle seasonal bosses and earn the best rewards, so you're ahead of the curve!
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 text-center text-gray-400 text-sm justify-end">
                        <p>The site uses both a selfmade database and <a href="https://www.wowhead.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Wowhead API</a> to generate content.</p>
                        <p>Special thanks to Shir Raanan for all the help they provided throughout this wonderful journey.</p>
                    </div>
                </div>
            </PageContent>
        </>
    );
}
