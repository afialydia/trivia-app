//libraries
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

//styles
import "./App.css";
import { Container, Flex, Spacer } from "@chakra-ui/react";

//files
import GAME_PLAY from "./pages/01_game_play.page";
import TriviaSettings from "./components/trivia_settings";
import Footer from "./components/footer";
import questions from "./components/questions";

function App() {
	const location = useLocation()
	return (
		<Flex
			// border="solid blue"
			margin="0"
			padding="0"
			justify="space-between"
			w="100%"
			h="100%"
			minH="100vh"
			direction="column"
		>
			<Spacer />
			<Container
				className="App"
				// border="solid rgb(129,25,40)"
				maxW="container.xl"
				w="calc(100vw - 2em)"
				h="100%"
				p="0"
				marginBottom=".5em"
			>
					<AnimatePresence exitBeforeEnter initial>
						<Switch location={location} key={location.pathname}>
							<Route exact path="/" component={TriviaSettings} />
							<Route exact path="/game" component={GAME_PLAY} />
							<Route exact path="/ui" component={questions} />
						</Switch>
					</AnimatePresence>
			</Container>
			<Spacer />
			<Footer />
		</Flex>
	);
}

export default App;
