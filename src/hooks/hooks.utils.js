//libraries
import React from "react";
import { Link as RouterLink } from "react-router-dom";

//styles
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	Center,
	Flex,
	Text,
	Button,
	Heading,
	Link,
	chakra
} from "@chakra-ui/react";

const ResultHeight = ({ color = null, answer = null }) => {
	return (
		<Center
			style={{
				// border: "solid",
				minHeight: "4.5rem",
			}}
		>
			<chakra.span
				as="h5"
				size="sm"
				letterSpacing="widest"
				lineHeight="short"
				style={{ color: { color } }}
			>
				{answer}
			</chakra.span>
		</Center>
	);
};

// display's whether question was answered correctly or not
export const isCorrect = (isCorrectAnswer, correct) => {
	//initial state upon "question load"
	if (isCorrectAnswer === undefined) {
		return <ResultHeight />;

		// correct answer
	} else if (isCorrectAnswer === true) {
		return <ResultHeight color={"green"} answer={"Correct!"} />;
	}
	// incorrect answer
	return (
		<ResultHeight
			color={"red"}
			answer={`Incorrect! The answer is ${correct}.`}
		/>
	);
};

//end of game handling, sends alert to player when they have chosen an answer on the last question

export const endOfGame = (
	totalQuestions,
	totalScore,
	answerChosen,
	gameOver,
	activeIndex,
	onClose
) => {
	if (activeIndex + 1 === totalQuestions && answerChosen) {
		return (
			<Modal onClose={()=>onClose} isCentered size={"lg"} isOpen>
				<ModalOverlay />
				<ModalContent background="transparent">
					<ModalBody background="transparent">
						<Flex
							textAlign="center"
							h="sm"
							maxH="585px"
							p="25px"
							my="auto"
							mx="auto"
							direction="column"
							align="space-between"
							justifyContent="space-evenly"
							background="rgb(237,111,151)"
							color="rgb(129,25,40)"
							borderRadius="xl"
							shadow="lg"
							// border="solid yellow"
						>
							<Heading>Boy Howdy!</Heading>
							{/* <Spacer/> */}
							<Text fontWeight="bold">
								{totalScore < totalQuestions / 2
									? "Better luck next time! "
									: "Well Done! "}
								<br />
								You got {totalScore} out of {totalQuestions} correct!
							</Text>{" "}
							<Link
								_hover={{
									color: "rgb(129,25,40)",
									textDecoration: "none",
								}}
								_active={{ color: "rgb(216,218,197)" }}
								as={RouterLink}
								to="/"
							>
								<Button
									color="rgb(237,111,151)"
									background="rgb(129,25,40)"
									my="1vh"
									type="button"
									w="100%"
									// className="start-button"
									_hover={{ background: "rgb(216,218,197)" }}
								>
									Select a new Trivia Topic.
								</Button>
							</Link>{" "}
						</Flex>
					</ModalBody>
				</ModalContent>{" "}
				{gameOver()}
			</Modal>
		);
	}
};
