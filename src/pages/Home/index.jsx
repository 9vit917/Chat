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
            isReaded={true}
            isTyping={false}/>
            <Message
            avatar="https://images.alphacoders.com/711/thumb-350-711581.jpg"
            text="azaza raka maka fo fristylo"
            date="Fri Mar 06 2020 18:41:08"
            isMe={true}
            isReaded={false}
            isTyping={false}/>
            <Message
            avatar="https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg"
            isMe={false}
            isReaded={true}
            isTyping={true}/>
            <Message
            avatar="https://images.alphacoders.com/711/thumb-350-711581.jpg"
            isMe={true}
            attachment={["https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"]}
            isReaded={true}/>
        </div>
    );
};

export default Home;