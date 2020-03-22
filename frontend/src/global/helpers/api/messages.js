import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3004'; //make global

const api = {
    getMessagesById: (id) => axios.get(`/messages/${id}`)
}

export default api;