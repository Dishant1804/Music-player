import React from "react";

const Song = ({ Currentsong }) => {
  return (
    <div className="song-container">
      <img src={Currentsong.cover} className="Song-Image" alt="Image not loadaed"/>
      <h1>{Currentsong.name}</h1>
      <h3>{Currentsong.artist}</h3>
    </div>
  );
};

export default Song;
