import axios from "axios";

export const publicURL = 'https://admin.goldenwoods.in/'
const instance = axios.create({
        baseURL: 'https://admin.goldenwoods.in/api'
    });

export default instance