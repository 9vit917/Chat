import React from 'react';

import { Message } from "../../components"

const Home = () => {
    return (
        <div>
            <Message
            avatar="https://cdn3.iconfinder.com/data/icons/shipping-and-delivery-2-1/512/54-512.png"
            text="azaza raka maka fo fristylo"
            date="Fri Mar 06 2020 18:41:08"
            isMe={true}/>
        </div>
    );
};

export default Home;