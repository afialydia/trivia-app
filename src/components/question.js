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
			// marginTop="2%"
			// justifyContent="space-between"
			flexGrow="1"
			// height={{ md: "auto", lg: "md" }}
			// w={{ base: "80%", sm: "85%" }}
			maxW="530px"
			minH="100%"
			w="100%"
			px="0"
		>
			<Flex
				direction="column"
				justify="space-evenly"
				// border="solid springgreen"
				placeItems="center"
				flexGrow="1"
				w="100%"
				h="100%"
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
					w="100%"
					maxW="545px"
					// border="solid teal"

					fontSize={{ sm: "sm", md: "lg" }}
					letterSpacing="wide"
					lineHeight="short"
					fontWeight="hairline"
					fontFamily="Montserrat"
					// mt={{ base: 3, sm: 5, md: 5 }}
					mx={{ sm: "auto", lg: 0 }}
					mb="2%"
					// minH={{ sm: "8em", lg: "auto" }}
					my=".5%"
					// display={{ base: "flex" }}
					// border='solid'
					minH="5.8em"
				>
					{question}{" "}
				</Box>
				<Flex
					direction="column"
					// height="60%"
					justify="space-evenly"
					my="1em"
					// border="solid blue"
				>
					{triviaAnswers.map((option) => {
						return (
							<Button
								key={option}
								// width={{ base: "100%", md: "sm" }}
								w="100%"
								fontSize={{ sm: "xs", md: "sm" }}
								color="rgb(237,111,151)"
								background="rgb(129,25,40)"
								my="1%"
								type="submit"
								textAlign="center"
								style={{
									whiteSpace: "normal",
									wordWrap: "break-word",
								}}
								_hover={{ background: "rgb(216,218,197)" }}
								_active={{ background: "rgb(244,246,222)" }}
								fontWeight="500"
								opacity="1"
								onClick={() => {
									option === correct
										? correctAnswer(totalScore, totalQuestions)
										: incorrectAnswer();
								}}
								disabled={answerChosen ? true : false}
								className={`options
									${option === correct ? "correct" : ""}`}
							>
								{option}
							</Button>
						);
					})}
				</Flex>
			</Flex>
			<Center
			// border="solid grey"
			// width="xs"
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
