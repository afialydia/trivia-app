//libraries
import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

//styles
import {
	Flex,
	Grid,
	Center,
	GridItem,
	Image,
	useMediaQuery,
} from "@chakra-ui/react";

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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Center
				backgroundSize="cover"
				// border=" grey solid"
			>
				<Flex
					justifySelf={{ base: "start", md: "center" }}
					align="center"
					// border="solid"
					width="100%"
					h="100%"
				>
					<Grid
						templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
						placeItems="center stretch"
						h="95%"
						w="100%"
						// border="solid lightblue"
						padding="2.5%"
						marginY=".5em"
						// background={{
						// 	base: "orange.400",
						// 	sm: "blue",
						// 	md: "red",
						// 	lg: "green",
						// 	xl: "gold",
						// 	"2xl": "pink",
						// }}
					>
						<GridItem
							// border="solid pink"
							colSpan={1}
						>
							<PinkContainer
								handleChange={handleChange}
								handleSubmit={handleSubmit}
							/>
						</GridItem>
						<GridItem colSpan={1}>
							<Image
								src="/cowboy.svg"
								boxSize={{ base: "auto" }}
								objectFit="cover"
								alt="BoyHowdyTrivia"
								margin="auto 0"
								display={{ base: "none", lg: "block" }}
							/>
						</GridItem>
					</Grid>
				</Flex>
			</Center>
		</motion.div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getTriviaQuestions: (data) => dispatch(getTriviaQuestions(data)),
	loadQuestion: () => dispatch(loadQuestion()),
});

export default connect(null, mapDispatchToProps)(TriviaSettings);
