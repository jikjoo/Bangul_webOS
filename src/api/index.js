import Axios from 'axios';

export const HOST = process.env.REACT_APP_MAIN_HOST || "http://localhost"
    , PORT = process.env.REACT_APP_MAIN_PORT || 3000;
const axios = Axios;
axios.defaults.baseURL = `${HOST}:${PORT}`

export default axios;

export const HOST_ML = process.env.REACT_APP_ML_HOST