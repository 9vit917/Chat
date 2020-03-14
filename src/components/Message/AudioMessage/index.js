import React, { useState, useRef } from 'react';

import play from '../static/play.svg';
import pause from '../static/pause.svg';

import './index.scss';


const AudioMessage = ( props ) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = useRef(null);

    const player = (ev) => {
        if(!isPlaying) {
            audio.current.play();
            setIsPlaying(true);
        }
        else {
            audio.current.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div className="audio-message">
            <audio ref={audio} src={ props.audio } preload="auto"/>
            <div className="audio-message__progress">
                
            </div>
            <div className="audio-message__info">
                <div className="audio-message__info__btn">
                {
                    isPlaying ? 
                    ( <button onClick={ player}> 
                        <img src={pause} alt="pause"/>
                    </button> ) :
                    ( <button onClick={ player }>
                        <img src={play} alt="play"/> 
                    </button> )
                }
                </div>
                <div className="audio-message__info__wave">
                </div>
                <div className="audio-message__info__duration">
                    <span>
                        00:19
                    </span>
                </div>
            </div>
        </div>
        )
    };


AudioMessage.propTypes = {
    
};

export default AudioMessage;