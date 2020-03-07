import React from 'react';

import { Message } from "../../components"

const Home = () => {
    return (
        <div>
            <Message
            avatar="https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg"
            text="azaza raka maka fo fristylo"
            date="Fri Mar 06 2020 18:41:08"
            isMe={false}
            isReaded={true}/>
            <Message
            avatar="https://images.alphacoders.com/711/thumb-350-711581.jpg"
            text="azaza raka maka fo fristylo"
            date="Fri Mar 06 2020 18:41:08"
            isMe={true}
            isReaded={false}/>
        </div>
    );
};

export default Home;