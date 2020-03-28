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
         case 'MESSAGES:ADD_ITEM':
         return {
            ...state,
            items: state.items.concat(payload)
         };
         default:
             return state;
    }
}