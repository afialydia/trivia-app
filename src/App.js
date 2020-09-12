import React from 'react';


import './App.css';
import GAME_PLAY from './pages/01_game_play.page';
import GAME_SET_UP from './pages/00_game_set_up.page';

function App() {
  return (
    <div className="App">

				<GAME_SET_UP />
				<GAME_PLAY/>
			
			
    </div>
  );
}

export default App;
