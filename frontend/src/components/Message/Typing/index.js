import React from 'react';

import './index.scss';


// странный компонент
// зачем лист из трёх li?
const Typing = ( props ) => (
    <ul className="typing">
        <li></li>
        <li></li>
        <li></li>
    </ul>
);

// не надо создавать лишние штуки когда ты их не используешь
Typing.propTypes = {
    
};

export default Typing;