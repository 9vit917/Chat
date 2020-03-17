import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3004';

const api = {
    getAll: () => axios.get('/dialogs')
}

export default api;