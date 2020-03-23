import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { dialogsApi } from '../../global/helpers/api';
import { messagesActions } from '../../store/actions';
import { Message } from "../../components";

import './index.scss';


const Messages = ( { currentDialog,fetchAllMessages, messages } ) => {
    const [listOfMessage, setMessages] = useState([]);

    useEffect(() => {
        if(currentDialog !== null) {
            /**
             * Можно в redux thunk action вынести запрос к api
             */
            fetchAllMessages(currentDialog).then((currentMessages)=>{
                if(!!currentMessages.items.length){
                    dialogsApi.getDialogById(currentDialog).then(({ data })=>{
                        setMessages(currentMessages.items.map((el) => <Message key={el.id} user={data.user} {...el}/>));
                    })
                }
                else {
                    setMessages([]);
                }
            })
            .catch((err) => console.log(err));
        }
    }, [currentDialog])

    return (
        <div className="dialogs-bar">
            { listOfMessage }
        </div>
    )
}


Messages.propTypes = {
    
};

export default connect(
    ({ messages, dialogs:{currentDialog} }) => ({messages, currentDialog}), 
     messagesActions
    )(Messages);