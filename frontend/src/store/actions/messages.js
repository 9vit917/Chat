import { messagesApi, dialogsApi } from "../../global/helpers/api";

const actions = {
    setMessages: (messages,chatFriendInfo) => ({
        type: 'MESSAGES:SET_ITEMS',
        payload: {
            messages,
            chatFriendInfo,
        }
    }),
    fetchAllMessages: (dialogId) => dispatch => {
        messagesApi.getMessagesById(dialogId).then( ({ data }) => {
            let messages = data.items;
            dialogsApi.getDialogById(dialogId).then(({ data })=> {
                let chatFriend = data.user;
                dispatch(actions.setMessages(messages, chatFriend ));
            })
        });
    }
}


export default actions;