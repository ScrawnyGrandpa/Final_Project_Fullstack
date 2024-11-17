import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import S1Dungeons from "./pages/dungeons/S1Dungeons";
import TwwDungeons from "./pages/dungeons/TwwDungeons";
import Raids from "./pages/raids/Raids";
import BossPage from "./pages/bosses/BossPage";
import BossForm from "./pages/bosses/BossForm";
import BossGuide from "./pages/bosses/BossGuide";
import RegisterPage from "./pages/user/RegisterPage";
import LoginPage from "./pages/user/LoginPage";
import CRM from "./pages/admin/CRM";


export const ROUTES = {
    ROOT: "/",
    ABOUT: "/about",
    RAIDS: "/raids",
    BOSS_INFO: "/boss",
    BOSS_FORM: "/boss-form",
    BOSS_GUIDE: "/boss-guide",
    NERUBAR: "/raids/nerubar",
    TWWDUNGEONS: "/tww-dungeons",
    S1DUNGEONS: "/s1-dungeonss",
    FAVORITES: "/liked-items",
    SIGNUP: "/signup",
    LOGIN: "/login",
    USER_PROFILE: "/user-profile",
    CRM: "/admin-portal",

    // TWW Dungeons
    ARA_KARA_ECHOES: "/tww-dungeons/ara-kara-city-of-echoes",
    CITY_OF_THREADS: "/tww-dungeons/city-of-threads",
    MEADERY: "/tww-dungeons/cinderbrew-meadery",
    DARKFLAME_CLEFT: "/tww-dungeons/darkflame-cleft",
    PRIORY: "/tww-dungeons/priory-of-the-sacred-flame",
    THE_DAWNBREAKER: "/tww-dungeons/the-dawnbreaker",
    THE_ROOKERY: "/tww-dungeons/the-rookery",
    THE_STONEVAULT: "/tww-dungeons/the-stonevault",

    // S1 Dungeons
    GRIM_BATOL: "/s1-dungeons/grim-batol",
    SIEGE: "/s1-dungeons/siege-of-boralus",
    MISTS: "/s1-dungeons/mists-of-tirna-scithe",
    NECROTIC_WAKE: "/s1-dungeons/the-necrotic-wake"
};

export default function Router() {

    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<HomePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.RAIDS} element={<Raids />} />
            <Route path={ROUTES.TWWDUNGEONS} element={<TwwDungeons />} />
            <Route path={ROUTES.S1DUNGEONS} element={<S1Dungeons />} />
            <Route path={ROUTES.BOSS_INFO + "/:id"} element={<BossPage />} />
            <Route path={ROUTES.BOSS_FORM + "/:id"} element={<BossForm />} />
            <Route path={ROUTES.BOSS_GUIDE + "/:id"} element={<BossGuide />} />
            <Route path={ROUTES.SIGNUP} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.CRM} element={<CRM />} />
            {/*<Route path={ROUTES.FAVORITES} element={< />} />
            <Route path={ROUTES.USER_PROFILE} element={< />} /> 
            {/*<Route path='*' element={<ErrorPage />} />*/}
        </Routes>
    )
};