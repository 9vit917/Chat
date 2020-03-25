import React from 'react';
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classNames from "classnames";

import Avatar from "./Avatar";
import Typing from "./Typing";
import AudioMessage from "./AudioMessage";
import './index.scss';


const statusComponent = (isReaded) => {
    return (
        <div className="message__status">
            <span className={classNames("message__status__icon", {"readed": isReaded, "not-readed": !isReaded})}></span>
        </div>
    )
}

const dateComponent = (date) => {
    return (
        <div className="message__content__date">
            { formatDistanceToNow(new Date(date), {addSuffix: true}) }
        </div>
    )
}

const textComponent = (text) => {
    return (
        <p className="message__content__text">
            { text }
        </p>
    )
}

const Message = ( 
    // Лучше все пропсы в один объект Message сгруппировать чтоб все каждый раз не писать 
    {
        user,
        text, 
        isTyping, 
        attachment, 
        audio, 
        date, 
        isReaded, 
        isMe
    } ) => (
        <div className={ classNames('message' , 
            {"message--friend": isMe}) 
            }>
            <Avatar user={user}/>
            <div className="message__content">
                {   (text || isTyping) && 
                    (<div className="message__content__wrapper">
                        { text && textComponent(text) }
                        { isTyping && <Typing /> }
                    </div>)
                }
                {
                    attachment &&
                    <div className="message__content__attachment">
                        <img src={attachment[0]} alt="attachment"/>
                    </div>
                }
                {
                    audio && 
                    (
                        <div className="message__content__wrapper">
                            <AudioMessage audio={audio}/>
                        </div>        
                    )
                }
                { date && dateComponent(date) }
            </div>
            { !isMe && statusComponent(isReaded) }
        </div>
)


Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    isMe: PropTypes.bool,
    isTyping: PropTypes.bool,
    attachment: PropTypes.array,
    audio: PropTypes.string
};


export default Message;