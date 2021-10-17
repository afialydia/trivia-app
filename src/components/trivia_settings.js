//libraries
import React, { useState } from "react";
import { connect } from "react-redux";

//styles
import { Flex, Grid, Center, GridItem } from "@chakra-ui/react";

//files
import PinkContainer from "./pink_container";
import {
	getTriviaQuestions,
	loadQuestion,
} from "../redux/set_up/set_up.actions";

const TriviaSettings = ({ history, getTriviaQuestions, loadQuestion }) => {
	const [state, setState] = useState({
		amount: "1",
		category: "23",
		difficulty: "easy",
	});

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
		console.log(state, e.target.name, e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { amount, category, difficulty } = state;
		console.log(amount, category, difficulty);
		getTriviaQuestions({ amount, category, difficulty });
		loadQuestion();
		history.push("/game");
	};

	return (
		<Center
			// border="solid"
			// h="90%"
		>
			<Flex justifySelf="start" 
			// border='solid'
			width="100%" h="95%">
				<Grid
					templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
					placeItems="stretch"
					h="100%"
					w="100%"
					// border="solid blue"
				>
					<GridItem
						// border="solid pink"
						// rowSpan={1}
						colSpan={1}
					>
						<PinkContainer
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
					</GridItem>
					{/* <Image
				src="/cowboy.svg"
				boxSize={{ base: "auto" }}
				objectFit="cover"
				alt="BoyHowdyTrivia"
				margin="auto 0"
				display={{ base: "none", sm: "none", md: "block" }}
			/> */}
				</Grid>
			</Flex>
		</Center>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getTriviaQuestions: (data) => dispatch(getTriviaQuestions(data)),
	loadQuestion: () => dispatch(loadQuestion()),
});

export default connect(null, mapDispatchToProps)(TriviaSettings);
