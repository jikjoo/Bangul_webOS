import Axios from 'axios';
import config from '../../resources/config.json';

const {SERVER} = config;
const {HOST,PORT } = SERVER;
const axios = Axios;
axios.defaults.baseURL = `http://${HOST}:${PORT}`

export default axios;