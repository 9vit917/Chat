import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './index.scss';
import Avatar from '../Message/Avatar'; //can be transferred from the message component

const DialogItem = ( { id, user, text, onSelect, currentDialog } ) => {

    return (
        <div
        className={classNames("dialog__item", {'active': id === currentDialog})}
        onClick={onSelect.bind(this, id)}>
            <div className="dialog__item__avatar">
                <Avatar user={user}/>
            </div>
            <div className="dialog__item__content">
                <div className="dialog__item__content__top">
                    <b className="dialog__item__content__top__sender">
                        { user.fullname }
                    </b>
                    <div className="dialog__item__content__top__date">
                        today{/* { formatDistanceToNow(new Date(date), {addSuffix: true}) } */}
                    </div>
                </div>

                <div className="dialog__item__content__bottom">
                    <p className="dialog__item__content__bottom__text">
                        { text.substring(0, 50) + '...' }
                    </p>
                    <div className="dialog__item__content__bottom__count">
                        <span>3</span>{/* { quantity } */}
                    </div>
                </div>
            </div>
        </div>
    )
};


DialogItem.propTypes = {
    text: PropTypes.string,
    user: PropTypes.object
};

export default DialogItem;