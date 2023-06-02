import React, { useState } from "react";
//impoerting components
import Song from "./components/Song";
import Player from "./components/Player";
import Music from "./Util";
//importing css
import Appcss from "./Styles/app.scss"



function App() {
  const [songs, Setsongs] = useState(Music());
  const [CurrentSong, SetCurrentsong] = useState(songs[0]);
  return (
    <div>
      <Song Currentsong={CurrentSong} />
      <Player playsong={CurrentSong} />
    </div>
  )
}

export default App;
