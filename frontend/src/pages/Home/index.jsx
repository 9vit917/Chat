import React from 'react';

import { Messages, Message, Dialogs, SendOptions } from "../../components";
import './index.scss';

const Home = () => {
    return (
        <div className="window">
            <header className="window__header">
                <div className="window__header__dialogs">

                </div>
                <div className="window__header__chat">

                </div>
            </header>
            <div className="window__content">
                <div className="window__content__dialogs">
                    <Dialogs />
                </div>
                <div className="window__content__chat">
                    <div className="window__content__chat__messages">
                        <Messages/>
                    {/* <Message
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
                    <Message
                    avatar="https://images.alphacoders.com/711/thumb-350-711581.jpg"
                    isMe={false}
                    audio="https://notificationsounds.com/soundfiles/298f95e1bf9136124592c8d4825a06fc/file-sounds-1105-rush.mp3"
                    isReaded={true}/>
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
                    isTyping={true}/> */}
                    </div>
                    <div className="window__content__chat__options">
                        <SendOptions />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;