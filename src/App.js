import React from 'react';
import { Route, Switch } from "react-router-dom";


import './App.css';
import Game_End from './pages/02_game_end.page';
import GAME_PLAY from './pages/01_game_play.page';
import GAME_SET_UP from './pages/00_game_set_up.page';

function App() {
  return (
    <div className="App">

				<GAME_SET_UP />
				<GAME_PLAY/>
				{/* <Route exact path="/result" component={Game_End} /> */}
			
			
    </div>
  );
}

export default App;
