import React from 'react';
import Routes from './Routes' 
import MusicControls from './components/MusicControls'
import './App.scss';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Routes/>
      </div>
      <MusicControls/>
    </div>
  );
}

export default App;
