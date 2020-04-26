import React from 'react';
import Routes from './Routes' 
import MusicControls from './components/MusicControls'
import { isMobile } from "react-device-detect";

import './App.scss';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Routes/>
      </div>
      {isMobile? <></>: <MusicControls/>}
    </div>
  );
}

export default App;
