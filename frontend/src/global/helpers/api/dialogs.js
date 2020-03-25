import axios from "./axios";

const api = {
    getDialogs: () => axios.get('/dialogs'),
    getDialogById: (dialogId) => axios.get(`/dialogs/${dialogId}`)
}

export default api;