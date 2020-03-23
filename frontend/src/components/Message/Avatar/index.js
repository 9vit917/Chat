import React from 'react';
import classNames from "classnames";

import './index.scss';

const getShortName = (name) => {
    return name.split(' ').map((el) => el.substring(0,1)).join('');
}

const Avatar = ( { user, status } ) => (
    <div className={classNames("avatar")}>
        {
            user.avatar ? <img src={ user.avatar } alt="avatar" /> :
            <div className="avatar_alt">
                <span>{ getShortName(user.fullname) }</span>
            </div>
        }
    </div>
);

export default Avatar;