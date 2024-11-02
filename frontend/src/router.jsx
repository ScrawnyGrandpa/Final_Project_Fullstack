import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import S1Dungeons from "./pages/dungeons/S1Dungeons";
import TwwDungeons from "./pages/dungeons/TwwDungeons";
import Raids from "./pages/raids/Raids";
import NerubarPalaceRaid from "./pages/raids/NerubarPalaceRaid";


export const ROUTES = {
    ROOT: "/",
    ABOUT: "/about",
    RAIDS: "/raids",
    NERUBAR: "/raids/nerubar",
    TWWDUNGEONS: "/tww-dungs",
    S1DUNGEONS: "/s1-dungs",
    FAVORITES: "/liked-items",
    SIGNUP: "/signup",
    LOGIN: "/login",
    USER_PROFILE: "/user-profile",
};

export default function Router() {

    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<HomePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.RAIDS} element={<Raids />} />
            <Route path={ROUTES.NERUBAR} element={<NerubarPalaceRaid />} />
            <Route path={ROUTES.TWWDUNGEONS} element={<TwwDungeons />} />
            <Route path={ROUTES.S1DUNGEONS} element={<S1Dungeons />} />
            {/*<Route path={ROUTES.FAVORITES} element={< />} />
            <Route path={ROUTES.SIGNUP} element={< />} />
            <Route path={ROUTES.LOGIN} element={< />} />
            <Route path={ROUTES.USER_PROFILE} element={< />} /> 
            {/*<Route path='*' element={<ErrorPage />} />*/}
        </Routes>
    )
};