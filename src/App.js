//libraries
import React from "react";
import { Route, Switch } from "react-router-dom";

//styles
import "./App.css";
import { Container, Image, Center, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

//files
import GAME_PLAY from "./pages/01_game_play.page";
import GAME_SET_UP from "./pages/00_game_set_up.page";
import SET_UP2 from "./pages/game_settings";

function App() {
	return (
		<Container
			centerContent
			className="App"
			maxW="container.full"
			maxH="container.full"
			background="rgb(244, 246, 222)"
			backgroundSize="cover"
			// minH='100vh'
			// border="solid rgb(129,25,40)"
		>
			{/* <Image
				src="/cowboy.svg"
				boxSize={{ base: "xs" }}
				alt="BoyHowdyTrivia"
				margin="auto 0"
			/> */}
			{/* <Spacer /> */}
			<Center>
				<Switch>
					<Route exact path="/" component={SET_UP2} />

					<Route exact path="/game" component={GAME_PLAY} />
					{/*       
			<GAME_PLAY />
			<GAME_SET_UP /> */}
				</Switch>
			</Center>
			{/* <Box
				w="100vw"
				background="rgb(216,218,197)"
				height="4vh"
				border="none"
			></Box> */}
		</Container>
	);
}

export default App;
