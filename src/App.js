//libraries
import React from "react";
import { Route, Switch } from "react-router-dom";

//styles
import "./App.css";
import { Container, Flex } from "@chakra-ui/react";

//files
import GAME_PLAY from "./pages/01_game_play.page";
import TriviaSettings from "./components/trivia_settings";
import Footer from "./components/footer";
import questions from "./components/questions";

function App() {
	return (
		<Flex 
		// border="solid blue" 
		justify='space-between'
		w="100%" h="100%" direction="column">
			<Container
				className="App"
				// border="solid rgb(129,25,40)"
				display="flex"
				flexDirection="column"
				w="calc(100vw - 2em)"
				h="calc(100vh - 2em)"
				p="0"
			>
				<Switch>
					<Route exact path="/" component={TriviaSettings} />
					<Route exact path="/game" component={GAME_PLAY} />
					<Route exact path="/ui" component={questions} />
				</Switch>
			</Container>
			<Footer />
		</Flex>
	);
}

export default App;
