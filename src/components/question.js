//Libraries
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//styles
import "./styles.css";
import {
	Center,
	Container,
	Flex,
	chakra,
	Box,
	Heading,
	useDisclosure,
	Button,
} from "@chakra-ui/react";

//files
import {
	correctAnswer,
	gameOver,
	incorrectAnswer,
} from "../redux/set_up/set_up.actions";
import {
	isCorrectAnswer,
	totalQuestions,
	lastQuestion,
	answerChosen,
	totalScore,
} from "../redux/set_up/set_up.utils";
import { isCorrect, endOfGame } from "../hooks/hooks.utils.js";

const Question = ({
	props,
	activeIndex,
	correctAnswer,
	incorrectAnswer,
	isCorrectAnswer,
	totalQuestions,
	answerChosen,
	gameOver,
	totalScore,
}) => {
	const [triviaAnswers, setTriviaAnswers] = useState([]);
	let { isOpen, onOpen, onClose } = useDisclosure();

	const question = decodeURIComponent(props.question);
	const correct = decodeURIComponent(props.correct_answer);
	const options = [];

	options.push(correct);

	props.incorrect_answers.forEach((answer) => {
		const incorrect = decodeURIComponent(answer);
		options.push(incorrect);
	});

	//randomizing options so that correct answer does not sit in the same place each time
	useEffect(() => {
		let randomizedIndex = (i) => {
			return Math.floor(Math.random() * i);
		};

		for (let i = options.length - 1; i > 0; i--) {
			const j = randomizedIndex(i);
			const temp = options[i];
			options[i] = options[j];
			options[j] = temp;
		}
		return setTriviaAnswers(options);
	}, []);

	return (
		<Container
			display="flex"
			// border="solid red"
			flexDirection="column"
			placeItems="center"
			marginTop="2vh"
			justifyContent="space-between"
			flexGrow="1"
			height={{ md: "auto", lg: "md" }}
			w={{ base: "80vw", sm: "85vw" }}
			maxW="530px"
			// p="55px"
		>
			<Flex
				direction="column"
				justify="space-evenly"
				// border="solid springgreen"
				placeItems="center"
				flexGrow="1"
			>
				{endOfGame(
					totalQuestions,
					totalScore,
					answerChosen,
					gameOver,
					activeIndex,
					isOpen,
					onOpen,
					onClose
				)}
				<Box
					w={{ base: "80vw", sm: "85vw" }}
					maxW="545px"
					// border="solid teal"
				>
					<Heading
						as="h5"
						fontSize={{ sm: "sm", md: "lg" }}
						letterSpacing="wide"
						lineHeight="short"
						fontWeight="hairline"
						fontFamily="Montserrat"
						// mt={{ base: 3, sm: 5, md: 5 }}
						// mx={{ sm: "auto", lg: 0 }}
						// mb={6}
						lineHeight="base"
						px="30px"
					>
						<chakra.span
							minH={{ sm: "65px", lg: "auto" }}
							// display={{ base: "flex" }} border='solid'
						>
							{question}{" "}
						</chakra.span>
					</Heading>
				</Box>
				<Flex
					direction="column"
					height="35vh"
					justify="space-around"
					// border="solid blue"
				>
					{triviaAnswers.map((option) => {
						return (
							<Button
								flexDirection="column"
								key={option}
								width={{ base: "60vw", md: "sm" }}
								fontSize={{ sm: "xs", md: "sm" }}
								color="rgb(237,111,151)"
								background="rgb(129,25,40)"
								my="1vh"
								type="submit"
								className="start-button"
								// padding="2px"
								minH="auto"
								textAlign="center"
								justifyContent="start"
								style={{
									whiteSpace: "normal",
									wordWrap: "break-word",
								}}
								

								_hover={{ background: "rgb(216,218,197)" }}
								_active={{ background: "rgb(244,246,222)" }}
								font-weight="500"
								opacity="1"
								onClick={() => {
									option === correct
										? correctAnswer(totalScore, totalQuestions)
										: incorrectAnswer();
								}}
								disabled={answerChosen ? true : false}
								className={`options
									${option == correct ? "correct" : ""}`}
								key={option}
							>
								<Center padding="2px" h="100%">
									{option}
								</Center>
							</Button>
						);
					})}
				</Flex>
			</Flex>
			<Center
				// border="solid grey"
				width="xs"
			>
				{isCorrect(isCorrectAnswer, correct)}
			</Center>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	isCorrectAnswer,
	totalQuestions,
	lastQuestion,
	answerChosen,
	totalScore,
});

const mapDispatchToProps = (dispatch) => ({
	correctAnswer: (totalScore, totalQuestions) =>
		dispatch(correctAnswer(totalScore, totalQuestions)),
	incorrectAnswer: () => dispatch(incorrectAnswer()),
	gameOver: () => dispatch(gameOver()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
