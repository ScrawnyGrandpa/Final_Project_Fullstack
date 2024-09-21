import { Link } from "react-router-dom";
import { ROUTES } from "../../router";

export default function Header() {
    return (
        <>
            <header className="bg-[#212930] text-[white] sticky top-0">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link to={ROUTES.ROOT} className="pr-2 pl-2">
                            Home
                        </Link>
                        <Link to={ROUTES.RAIDS} className="pr-2 pl-2 border-x-[1px]">
                            Raids
                        </Link>
                        <Link to={ROUTES.TWWDUNGEONS} className="pr-2 pl-2">
                            TWW Dungeons
                        </Link>
                        <Link to={ROUTES.S1DUNGEONS} className="pr-2 pl-2 border-x-[1px]">
                            S1 Dungeons
                        </Link>
                        <Link to={ROUTES.ABOUT} className="pr-2 pl-2 ">
                            About
                        </Link>
                        <Link to={ROUTES.ABOUT} className="pr-2 pl-2 border-l-[1px]">
                            Contact
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
};