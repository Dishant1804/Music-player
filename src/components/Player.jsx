import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ CurrentSong, isplaying, setIsplaying, audioRef, songInfo, setSongInfo, timeUpdatehandler }) => {
    //adding events
    const playSongHandler = () => {
        if (isplaying) {
            audioRef.current.pause();
            setIsplaying(!isplaying);
        }
        else {
            audioRef.current.play();
            setIsplaying(!isplaying);
        }
    };
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    const dragHandler = (e) => {
        return (
            audioRef.current.currentTime = e.target.value,
            setSongInfo({ ...songInfo, currentTime: e.target.value })
        );
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration} onChange={dragHandler} value={songInfo.currentTime} type="Range" className="Range-input" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon icon={faBackward} size="2xl" />
                <FontAwesomeIcon onClick={playSongHandler} icon={isplaying ? faPause : faPlay} size="2xl" />
                <FontAwesomeIcon icon={faForward} size="2xl" />
            </div>
            <audio onTimeUpdate={timeUpdatehandler} onLoadedMetadata={timeUpdatehandler} ref={audioRef} src={CurrentSong.audio} />
        </div>
    );
};

export default Player;