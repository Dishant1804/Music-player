import React, { useState } from "react";
import AppStyleSheet from './Styles/app.scss'
import Song from "./components/Song";
import Player from "./components/Player";
import Music from "./Util";

function App() {
  const [songs, Setsongs] = useState(Music());
  const [Currentsong, SetCurrentsong] = useState(songs[7]);
  return (
    <div>
      <Song Currentsong={Currentsong} />
      <Player playsong={Currentsong} />
    </div>
  )
}

export default App;
