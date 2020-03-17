import React from 'react';
import classNames from "classnames";

import './index.scss';

const getShortName = (name) => {
    return name.split(' ').map((el) => el.substring(0,1)).join('');
}

const Avatar = ( { img, name, status } ) => (
    <div className={classNames("avatar")}>
        {
            img ? <img src={ img } alt="avatar" /> :
            <div className="avatar_alt">
                <span>{ getShortName(name) }</span>
            </div>
        }
    </div>
);

export default Avatar;