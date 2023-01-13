import api from "../config/axios.config";

export async function getChangeByValue(value) {
    return api.get(`/getchange/${value}`);
}


