import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './index.scss';
import Avatar from '../Message/Avatar'; //maybe move up from message component

const DialogItem = ( props ) => (
    <div className="dialog__item">
        <div className="dialog__item__avatar">
            <Avatar img={ props.user.avatar } name={ props.user.fullname }/>
        </div>
        <div className="dialog__item__content">
            <div className="dialog__item__content__top">
                <b className="dialog__item__content__top__sender">
                    { props.user.fullname }
                </b>
                <div className="dialog__item__content__top__date">
                    today{/* { formatDistanceToNow(new Date(date), {addSuffix: true}) } */}
                </div>
            </div>

            <div className="dialog__item__content__bottom">
                <p className="dialog__item__content__bottom__text">
                    { props.text.substring(0, 50) + '...' }
                </p>
                <div className="dialog__item__content__bottom__count">
                    <span>3</span>{/* { quantity } */}
                </div>
            </div>
        </div>
    </div>
);


DialogItem.propTypes = {
    text: PropTypes.string,
    user: PropTypes.object
};

export default DialogItem;