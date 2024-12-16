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
import DungeonPage from "./pages/dungeons/DungeonPage";
import DungeonForm from "./pages/dungeons/DungeonForm";
import FavoriteItems from "./pages/user/FavoriteItems";
import UserProfile from "./pages/user/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import Admin_Tutorial from "./pages/admin/Admin_Tutorial";


export const ROUTES = {
    ROOT: "/",
    ABOUT: "/about",
    RAIDS: "/raids",
    BOSS_INFO: "/boss",
    BOSS_CREATE: "/create-boss",
    BOSS_FORM: "/boss-form",
    BOSS_GUIDE: "/boss-guide",
    DUNGEON_INFO: "/dungeon",
    DUNGEON_CREATE: "/create-dungeon",
    DUNGEON_FORM: "/dungeon-form",
    NERUBAR: "/raids/nerubar",
    TWWDUNGEONS: "/tww-dungeons",
    S1DUNGEONS: "/s1-dungeonss",
    FAVORITES: "/liked-items",
    SIGNUP: "/signup",
    LOGIN: "/login",
    USER_PROFILE: "/user-profile",
    CRM: "/admin-portal",
    CRM_TUTORIAL: "/admin-tutorial"
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
            <Route path={ROUTES.BOSS_CREATE} element={<BossForm />} />
            <Route path={ROUTES.BOSS_FORM + "/:id"} element={<BossForm />} />
            <Route path={ROUTES.BOSS_GUIDE + "/:id"} element={<BossGuide />} />
            <Route path={ROUTES.DUNGEON_INFO + "/:id"} element={<DungeonPage />} />
            <Route path={ROUTES.DUNGEON_CREATE} element={<DungeonForm />} />
            <Route path={ROUTES.DUNGEON_FORM + "/:id"} element={<DungeonForm />} />
            <Route path={ROUTES.SIGNUP} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.FAVORITES} element={<FavoriteItems />} />
            <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
            <Route path={ROUTES.CRM} element={<CRM />} />
            <Route path={ROUTES.CRM_TUTORIAL} element={<Admin_Tutorial />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
};