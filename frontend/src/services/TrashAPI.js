import API from "./API";

const backendPort = import.meta.env.VITE_APP_BACKEND_PORT;

export default class TrashAPI extends API {
    static apiUrl = `http://localhost:${backendPort}/trash`;
}
