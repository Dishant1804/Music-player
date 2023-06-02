import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({CurrentSong ,isplaying, setIsplaying}) => {
    const audioRef = useRef(null);
    //adding events
    const playSongHandler = () => {
        if(isplaying){
            audioRef.current.pause();
            setIsplaying(!isplaying);
        }
        else{
            audioRef.current.play();
            setIsplaying(!isplaying);
        }
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
            <audio ref={audioRef} src={CurrentSong.audio}/>
        </div>
    )
}

export default Player;