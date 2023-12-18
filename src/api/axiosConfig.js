import axios from "axios";

export const publicURL = 'http://admin.goldenwoods.in/'
const instance = axios.create({
        baseURL: 'http://admin.goldenwoods.in/api'
    });

export default instance