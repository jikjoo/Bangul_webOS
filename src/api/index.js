import Axios from 'axios';
import config from '../../resources/config.json';

const {SERVER} = config;
const {HOST,PORT } = SERVER;

Axios.defaults.baseURL = `http://${HOST}:${PORT}`

export default Axios;