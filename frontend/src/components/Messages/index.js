import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { messagesActions } from '../../store/actions';
import { Message } from "../../components";

import './index.scss';


const Messages = ( { currentDialog,fetchAllMessages, messages } ) => {

    useEffect(() => {
        if(currentDialog !== null) {
            fetchAllMessages(currentDialog)
        }
    }, [currentDialog])

    return (
        <div className="dialogs-bar">
            { 
            messages.items && messages.items.map((el) => 
            <Message key={el.id} 
            user={messages.chatFriendInfo} 
            {...el}/>) 
            }
        </div>
    )
}


Messages.propTypes = {
    
};

export default connect(
    ({ messages, dialogs:{currentDialog} }) => ({messages, currentDialog}), 
     messagesActions
    )(Messages);