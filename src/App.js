import React from 'react';
import Nav from './components/Nav'
import Main from './components/Main';
import MusicControls from './components/MusicControls'
import './App.scss';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav/>
        <Main/>
      </div>
      <MusicControls/>
    </div>
  );
}

export default App;
