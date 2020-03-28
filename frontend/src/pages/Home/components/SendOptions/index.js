import React, { useState, useRef, useEffect} from 'react';
import classNames from "classnames";
import { SmileOutlined, SendOutlined } from "@ant-design/icons";
import { connect } from 'react-redux';

import { Input, message } from 'antd';

import './index.scss';
import { messagesActions } from '../../../../store/actions';

const SendOptions = ( { addMessage, items, currentDialog } ) => {
    
    const [textMessage, setTextMessage] = useState('');

    const generateNewMessage = (text) => {
        return {
            id: items.length + 1,
            isMe: true,
            text: text
        }
    }

    const sendMessage = () => {
        addMessage(generateNewMessage(textMessage));
        setTextMessage('');
    }

    const changeText = (e) => {
        setTextMessage(e.target.value);
    }

    useEffect(() => {
        setTextMessage('');
    }, [currentDialog]);

    return (
        <div className="sendOptions">
            <div>
                <SmileOutlined />
            </div>
            <Input.TextArea id="newMessage" 
                rows={1} 
                cols="50" 
                value={ textMessage }
                placeholder="Write a message...." 
                onChange={changeText}
                />
            <div>
                <button disabled={ !textMessage } onClick={sendMessage}>
                    <SendOutlined />
                </button>
            </div>
        </div>
    )
};

export default connect(
    ( { messages, dialogs } ) => ( messages, dialogs),
    messagesActions
)(SendOptions);