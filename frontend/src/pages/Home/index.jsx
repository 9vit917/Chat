import React from 'react';

import { SendOptions } from "./components";
import { Messages, Dialogs } from "./conteiners";
import './index.scss';
import { connect } from 'react-redux';

const Home = ( { currentDialog } ) => {

    const showContent = () => {
        return !!currentDialog ? (
            <div className="window__content__chat">
                <div className="window__content__chat__messages">
                    <Messages/>
                </div>
                <div className="window__content__chat__options">
                    <SendOptions />
                </div>
            </div>
        ) : (
        <div className="window__content__chat">
            sorry
        </div>
        )
    } 

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
                {   
                !!currentDialog ?
                    (
                    <div className="window__content__chat">
                        <div className="window__content__chat__messages">
                            <Messages/>
                        </div>
                        <div className="window__content__chat__options">
                            <SendOptions />
                        </div>
                    </div>
                    ) : (
                        <div className="window__content__chat">
                            <div className="window__content__chat__empty">
                                <p>
                                    Please select a chat to start messaging    
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default connect(
({ dialogs }) => dialogs 
)(Home);