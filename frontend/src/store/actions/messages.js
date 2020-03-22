import { messagesApi } from "../../global/helpers/api";

const actions = {
    setMessages: items => ({
        type: 'MESSAGES:SET_ITEMS',
        payload: items
    }),
    fetchAllMessages: (dialogId) => dispatch => new Promise((res,rej)=>{
        messagesApi.getMessagesById(dialogId).then( ({ data }) => {
            dispatch(actions.setMessages(data));
            res(data);
        });
    })
}


export default actions;