import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = () =>{
    return(
        <div className="player">
            <div className="time-control">
                <p>Start time</p>
                <input type="Range" />
                <p>End time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon icon={faBackward} size="2xl" />
                <FontAwesomeIcon icon={faPlay} size="2xl" />
                <FontAwesomeIcon icon={faForward} size="2xl" />
            </div>
        </div>
    )
}

export default Player;