import API from "./API";

const backendPort = import.meta.env.VITE_APP_BACKEND_PORT || 3000;

export default class DungeonAPI extends API {
    static apiUrl = `http://localhost:${backendPort}/dungeon`;
}
