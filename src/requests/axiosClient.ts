import axios from "axios";

export const Axios = axios.create({
    baseURL : "https://api.pmxchange.co/api/Market/Exchange"
})