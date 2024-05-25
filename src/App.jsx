import React, { useState, useRef } from "react";
//importing components
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./Util";
import Library from "./components/Library";
//importing css
import "./Styles/app.scss"



function App() {
  //ref
  const audioRef = useRef(null);
  //state
  const [songs, Setsongs] = useState(data());
  const [CurrentSong, SetCurrentsong] = useState(songs[0]);
  const [isplaying, setIsplaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const timeUpdatehandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration })
  };
  return (
    <div>
      <Song Currentsong={CurrentSong} isplaying={isplaying} />
      <Player isplaying={isplaying} setIsplaying={setIsplaying} CurrentSong={CurrentSong} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} timeUpdatehandler={timeUpdatehandler} />
      <Library SetCurrentsong={SetCurrentsong} songs={songs} audioRef={audioRef} isplaying={isplaying} />
    </div>
  )
}

export default App;
