import React from "react";

const LibrarySongs = ({ song, songs,SetCurrentsong, audioRef, isplaying}) => {
    const songSelectHandler = () =>{
        SetCurrentsong(song);
        console.log(song.id)
        if(isplaying){
            const playPromise= audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio) =>{
                    audioRef.current.play();
                })
            }
        }
    }
    return (
        <div onClick={songSelectHandler} className="Library-Song">
            <img src={song.cover} alt="Image not loadaed" />
            <div className="Song-Description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySongs;
