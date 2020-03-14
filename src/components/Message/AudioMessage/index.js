import React, { useState, useRef, useEffect } from 'react';

import play from '../static/play.svg';
import pause from '../static/pause.svg';
import { convertTime } from '../../../global/helpers';

import './index.scss';


const AudioMessage = ( props ) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audio = useRef(null);

    useEffect(() => {

        audio.current.addEventListener("timeupdate", () => {
            const duration = audio ? audio.current.duration : 0;

            if(audio.current.currentTime === duration) {
                setProgress(0);
                setIsPlaying(false);
                setCurrentTime(0);
            }
            else{
                let time = Math.floor(duration) - Math.floor(audio.current.currentTime);
                setProgress((audio.current.currentTime / duration) * 100);
                setCurrentTime(audio.current.currentTime);
            }
        })
    }, [])

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
            <audio ref={audio} src={ props.audio } preload="metadata"/>
            <div className="audio-message__progress" style={{width: progress + "%"}}>
                
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
                        { convertTime(currentTime) }
                    </span>
                </div>
            </div>
        </div>
        )
    };


AudioMessage.propTypes = {
    
};

export default AudioMessage;