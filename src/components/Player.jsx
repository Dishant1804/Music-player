import React, { useRef } from 'react'
//importinf fontpacks
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({CurrentSong}) => {
    //adding references
    const audioRef = useRef(null);
    //adding event handlers
    const playSongHandler = () => {
        audioRef.current.play();
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>Start time</p>
                <input type="Range" className="Range-input"/>
                <p>End time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon icon={faBackward} size="2xl" />
                <FontAwesomeIcon onClick={playSongHandler} icon={faPlay} size="2xl" />
                <FontAwesomeIcon icon={faForward} size="2xl" />
            </div>
            {/* <audio ref={audioRef} src='{CurrentSong.music}' /> */}
        </div>
    )
}

export default Player;