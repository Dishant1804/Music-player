import React from 'react';
import LibrarySongs from './LibrarySongs';

const Library = ({ songs, SetCurrentsong, audioRef, isplaying }) => {
    return (
        <div className="Library">
            <h2>Library</h2>
            <div className="Library-Song1">
                {songs.map((song) => <LibrarySongs songs={songs} SetCurrentsong={SetCurrentsong} song={song} id={song.id} key={song.id} audioRef={audioRef} isplaying={isplaying}/>)}
            </div>
        </div>
    );
};

export default Library;