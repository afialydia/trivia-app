//libraries
import React from "react";
import { Route, Switch } from "react-router-dom";

//styles
import "./App.css";
import { Container, Center } from "@chakra-ui/react";

//files
import GAME_PLAY from "./pages/01_game_play.page";
import TriviaSettings from "./components/trivia_settings";

function App() {
	return (
		<Container
			centerContent
			className="App"
			maxW="container.full"
			maxH="container.full"
			background="rgb(244, 246, 222)"
			backgroundSize="cover"
			// border="solid rgb(129,25,40)"
		>
			<Center>
				<Switch>
					<Route exact path="/" component={TriviaSettings} />
					<Route exact path="/game" component={GAME_PLAY} />
				</Switch>
			</Center>
		</Container>
	);
}

export default App;
