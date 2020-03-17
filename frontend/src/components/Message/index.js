import React from 'react';
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classNames from "classnames";

import Avatar from "./Avatar";
import Typing from "./Typing";
import AudioMessage from "./AudioMessage";
import './index.scss';


const setStatus = (isReaded) => {
    return (
        <div className="message__status">
            <span className={classNames("message__status__icon", {"readed": isReaded, "not-readed": !isReaded})}></span>
        </div>
    )
}

const setDate = (date) => {
    return (
        <div className="message__content__date">
            { formatDistanceToNow(new Date(date), {addSuffix: true}) }
        </div>
    )
}

const setText = (text) => {
    return (
        <p className="message__content__text">
            { text }
        </p>
    )
}

const Message = ( props ) => (

        <div className={ classNames('message' , 
            {"message--friend": props.isMe}) 
            }>
            <Avatar img={ props.avatar } />
            <div className="message__content">
                {   (props.text || props.isTyping) && 
                    (<div className="message__content__wrapper">
                        { props.text && setText(props.text) }
                        { props.isTyping && <Typing /> }
                    </div>)
                }
                {
                    props.attachment &&
                    <div className="message__content__attachment">
                        <img src={props.attachment[0]} alt="attachment"/>
                    </div>
                }
                {
                    props.audio && 
                    (
                        <div className="message__content__wrapper">
                            <AudioMessage audio={props.audio}/>
                        </div>        
                    )
                }
                { props.date && setDate(props.date) }
            </div>
            { !props.isMe && setStatus(props.isReaded) }
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