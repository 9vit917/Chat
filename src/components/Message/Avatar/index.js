import React from 'react';

import './index.scss';

//Add alternative avatar insted of img if user doesn't have img

const Avatar = ( { img, status } ) => (
    <div className="message__avatar">
        <img src={ img } alt="avatar" />
    </div>
);

export default Avatar;