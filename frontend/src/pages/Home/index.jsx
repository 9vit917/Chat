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