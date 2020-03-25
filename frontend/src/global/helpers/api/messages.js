import axios from "./axios";

const api = {
    getMessagesById: (id) => axios.get(`/messages/${id}`)
}

export default api;