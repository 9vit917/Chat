import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3004';

const api = {
    getDialogs: () => axios.get('/dialogs'),
    getDialogById: (dialogId) => axios.get(`/dialogs/${dialogId}`)
}

export default api;