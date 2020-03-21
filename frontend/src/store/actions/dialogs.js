import { dialogsApi } from "../../global/helpers/api";

const actions = {
    setDialogs: items => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items
    }),
    setCurrentDialog: id => ({
        type: 'DIALOGS:SET_CURRENT_DIALOG',
        payload: id
    }),
    fetchAllDialogs: () => dispatch => {
        dialogsApi.getAll().then( ({ data }) => {
            dispatch(actions.setDialogs(data));
        });
    }
}


export default actions;