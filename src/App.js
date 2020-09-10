import React from 'react';
import { Route, Switch } from "react-router-dom";


import './App.css';
import Game_End from './pages/02_game_end.page';
import Game_Play from './pages/01_game_play.page';
import Game_Set_Up from './pages/00_game_set_up.page';

function App() {
  return (
    <div className="App">

      <Switch>
				<Route exact path="/" component={Game_Set_Up} />
				<Route exact path="/play" component={Game_Play} />
				<Route exact path="/result" component={Game_End} />
			
			</Switch>
    </div>
  );
}

export default App;
