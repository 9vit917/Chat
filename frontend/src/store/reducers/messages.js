const initialState = {
    items: [],
    chatFriendInfo: {}
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
         case 'MESSAGES:SET_ITEMS':
         return {
            items: payload.messages,
            chatFriendInfo: payload.chatFriendInfo 
         };
         default:
             return state;
    }
}