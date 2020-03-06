import React from 'react';
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classNames from "classnames";

import './index.scss';

const Message = ( props ) => (
    <div>
        <div className={ classNames('message' , {"message--friend": props.isMe}) }>
            <div className="message__avatar">
                <img src={ props.avatar } alt="avatar" />
            </div>
            <div className="message__content">
                <div className="message__content__wrapper">
                    <p className="message__content__text">
                        { props.text }
                    </p>
                </div>
                <div className="message__content__date">
                    { formatDistanceToNow(new Date(props.date), {addSuffix: true}) }
                </div>
            </div>
        </div>
    </div>
)


Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
};


export default Message;