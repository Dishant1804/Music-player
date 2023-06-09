import React, { useState } from "react";
//importing components
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./Util";
//importing css
import Appcss from "./Styles/app.scss"



function App() {
  const [songs, Setsongs] = useState(data());
  const [CurrentSong, SetCurrentsong] = useState(songs[0]);
  const [isplaying, setIsplaying] = useState(false);
  return (
    <div>
      <Song Currentsong={CurrentSong} />
      <Player isplaying={isplaying} setIsplaying={setIsplaying} CurrentSong={CurrentSong} />
    </div>
  )
}

export default App;
