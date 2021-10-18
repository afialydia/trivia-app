//libraries
import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link as RouterLink } from "react-router-dom";

//styles
import { Carousel, CarouselItem } from "reactstrap";

import {
	Link,
	Flex,
	Heading,
	Box,
	Grid,
	GridItem,
	Spacer,
	chakra,
	Button,
} from "@chakra-ui/react";

//files
import Question from "./question";
import { loadQuestion } from "../redux/set_up/set_up.actions";
import {
	answerChosen,
	isCorrectAnswer,
	totalScore,
	totalQuestions,
} from "../redux/set_up/set_up.utils";
import { endOfGame } from "../hooks/hooks.utils";

const Questions = ({
	allQuestions,
	answerChosen,
	loadQuestion,
	isCorrectAnswer,
	totalQuestions,
	totalScore,
}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === allQuestions.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
		loadQuestion();
	};
	const previous = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === 0 ? allQuestions.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};
	const progressArrow = (answerChosen, lastQuest) => {
		if (!lastQuest && answerChosen) {
			return (
				<Button
					width="auto"
					color="rgb(237,111,151)"
					background="rgb(129,25,40)"
					my="1vh"
					type="submit"
					_hover={{ background: "rgb(216,218,197)", color: "rgb(237,111,151)" }}
					_active={{ background: "rgb(244,246,222)" }}
					_focus={{}}
					opacity="1"
					direction="next"
					// directiontext="Next"
					onClick={next}
					className={`carousel-control-next 
${isCorrectAnswer ? "one" : "two"}`}
				>
					<Heading
						as="h5"
						size="sm"
						letterSpacing="widest"
						// color="rgb(216,218,197)"
						lineHeight="short"
					>
						Next Question
					</Heading>
				</Button>
			);
		}
	};

	let mock = [
		// {
		// 	correct_answer: "Andrew%20Jackson",
		// 	incorrect_answers: [
		// 		"Harry%20S.%20Truman",
		// 		"Martin%20Van%20Buren",
		// 		"John%20Quincy%20Adams",
		// 	],
		// 	question:
		// 		"The%20%22Trail%20of%20Tears%22%20was%20a%20result%20of%20which%20United%20States%20President%27s%20Indian%20Removal%20Policy%3F",
		// },
		{
			correct_answer: "Poland%20and%20Lithuania",
			incorrect_answers: [
				"Hutu%20and%20Rwanda",
				"Filthy%20Acts%20done%20For%20A%20REASONABLE prices",
				"Bangladesh%20and%20Bhutan",
			],
			question:
				"These%20two%20countries%20held%20a%20commonwealth%20from%20the%2016th%20to%2018th%20century.",
		},
	];
	//allQuestions
	const slides = allQuestions.map((item) => {
		return (
			<CarouselItem
				className="carousel-card"
				// tag="Flex"
				key={item.question}
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
			>
				<Question
					key={item}
					props={item}
					activeIndex={activeIndex}
					progressArrow={progressArrow}
				/>
			</CarouselItem>
		);
	});

	let lastQuest = activeIndex + 1 === totalQuestions;

	return (
		<Flex
			justifySelf="start"
			// border="solid green"
			width="100%"
			h="100%"
		>
			<Grid
				templateColumns={{ sm: "1fr" }}
				placeItems="stretch"
				minH="95%"
				w="100%"
				// border="solid blue"
				padding="2.5%"
				marginY="2.5%"
			>
				<GridItem
				//  border="solid lime"
				colSpan={1}
				>
					<Flex
						// justifyContent="space-between"
						textAlign="center"
						direction="column"
						w="100%"
						minH="100%"
						background="rgb(237,111,151)"
						color="rgb(129,25,40)"
						borderRadius="xl"
						shadow="lg"
						justify="space-evenly"
						align="stretch"
						padding="1.5em"
						// border="solid red"
					>
						<Link
							_hover={{
								color: "rgb(129,25,40)",
								textDecoration: "none",
							}}
							// _active={{ color: "rgb(216,218,197)" }}
							as={RouterLink}
							to="/"
						>
							<Box w="100%">
								<Heading
									fontFamily="Shrikhand"
									letterSpacing="wider"
									lineHeight="short"
									fontWeight="hairline"
								>
									<chakra.span display={{ base: "block" }}>
										Boy Howdy{" "}
									</chakra.span>
									<chakra.span display={{ base: "block" }}>
										Trivia Bodanza{" "}
									</chakra.span>
								</Heading>{" "}
							</Box>
						</Link>
						<Flex
							direction="column"
							// border="solid dodgerblue"
							// padding-bottom='15px'
							justify="space-around"
							// h="98%"
							flexGrow="1"
						>
							<Flex
								flexGrow="1"
								// border="solid orange"
								w="100%"
								direction="column"
								justifyContent="space-around"
								align="center"
							>
								<Carousel
									flexGrow={1}
									// border="solid teal 15px"
									activeIndex={activeIndex}
									previous={() => previous()}
									next={() => next()}
									interval={false}
								>
									{slides}
								</Carousel>
							</Flex>

							<Flex
								justify="center"
								display={{ sm: "flex", md: "none" }}
								// border="solid grey"
								direction="column"
								minH="14%"
							>
								<chakra.span
									textAlign="center"
									minH="3.5em"
									// height="auto"
									flexGrow="1"
									display={{ base: "block" }}
								>
									{progressArrow(answerChosen, lastQuest)}
								</chakra.span>{" "}
								<Spacer />{" "}
								<Flex
									// border="solid"
									justify="space-around"
								>
									<Heading
										fontSize="md"
										fontFamily="Shrikhand"
										letterSpacing="wider"
										lineHeight="short"
										fontWeight="hairline"
										textAlign="center"
										color="rgb(129,25,40)"
									>
										{" "}
										<chakra.span color="rgb(216,218,197)">
											{" "}
											{totalScore}{" "}
										</chakra.span>
									</Heading>
									<Heading
										fontSize={{ base: "md", sm: "md" }}
										fontFamily="Shrikhand"
										letterSpacing="wider"
										lineHeight="short"
										fontWeight="hairline"
										textAlign="center"
										color="rgb(129,25,40)"
									>
										<chakra.span display={{ base: "block" }}>
											{activeIndex + 1} of {totalQuestions}{" "}
										</chakra.span>{" "}
									</Heading>{" "}
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</GridItem>

				<GridItem display="none">
					<Flex
						display={{ base: "none", md: "flex" }}
						justify="center"
						direction="column"
					>
						<Spacer />
						<Heading
							fontSize={{ base: "3xl", sm: "4xl" }}
							fontFamily="Shrikhand"
							letterSpacing="wider"
							lineHeight="short"
							fontWeight="hairline"
							textAlign="center"
							color="rgb(129,25,40)"
							display={{ base: "none", lg: "block" }}
						>
							<chakra.span display={{ base: "block" }}>Boy Howdy </chakra.span>
							<chakra.span display={{ base: "block" }}>
								Trivia Bodanza{" "}
							</chakra.span>
							<chakra.span display={{ base: "block" }}>
								Question: {activeIndex + 1} of {totalQuestions}{" "}
							</chakra.span>
							<chakra.span display={{ base: "block" }}>
								{" "}
								Score: {totalScore}{" "}
							</chakra.span>{" "}
						</Heading>
						<Spacer />
						<chakra.span
							textAlign="center"
							minH="60px"
							height="auto"
							display={{ base: "block" }}
						>
							{progressArrow(answerChosen, lastQuest)}
						</chakra.span>{" "}
						<Spacer />
					</Flex>
				</GridItem>
			</Grid>
		</Flex>
	);
};

const mapStateToProps = createStructuredSelector({
	answerChosen,
	isCorrectAnswer,
	totalScore,
	totalQuestions,
	endOfGame,
});

const mapDispatchToProps = (dispatch) => ({
	loadQuestion: () => dispatch(loadQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
