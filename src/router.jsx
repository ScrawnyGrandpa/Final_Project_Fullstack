import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Raids from "./pages/Raids";
import TwwDungeons from "./pages/TwwDungeons";
import S1Dungeons from "./pages/S1Dungeons";

export const ROUTES = {
    ROOT: "/",
    ABOUT: "/about",
    RAIDS: "/raids",
    TWWDUNGEONS: "/tww-dungs",
    S1DUNGEONS: "/s1-dungs",
    FAVORITES: "/fav",
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