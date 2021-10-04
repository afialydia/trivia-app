//libraries
import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link as RouterLink } from "react-router-dom";

//styles
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

import {
	Link,
	Container,
	Center,
	Flex,
	Heading,
	Box,
	Grid,
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
					className="start-button"
					_hover={{ background: "rgb(216,218,197)", color: "rgb(237,111,151)" }}
					_active={{ background: "rgb(244,246,222)" }}
					_focus={{}}
					opacity="1"
					direction="next"
					directionText="Next"
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
		{
			correct_answer: "Andrew%20Jackson",
			incorrect_answers: [
				"Harry%20S.%20Truman",
				"Martin%20Van%20Buren",
				"John%20Quincy%20Adams",
			],
			question:
				"The%20%22Trail%20of%20Tears%22%20was%20a%20result%20of%20which%20United%20States%20President%27s%20Indian%20Removal%20Policy%3F",
		},
		{
			correct_answer: "Poland%20and%20Lithuania",
			incorrect_answers: [
				"Hutu%20and%20Rwanda",
				"Filthy%20Acts%20done%20For%20A%20REASONABLE%20PRICEFilthy%20Acts%20done%20For%20A%20REASONABLE%20PRICE",
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
				tag="Flex"
				// styles={{ border: "solid gold" }}
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

	<Grid
			templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2, 1fr)" }}
			gap={0}
			place-items="center"
			h="100vh"
		
		>	

			<Flex
				textAlign="center"
				w={{ base: "auto", sm: "85vw" }}
				maxW="545px"
				height="93.25vh"
				maxH="585px"
				p="25px"
				my="auto"
				mx="auto"
				direction="column"
				align="space-between"
				justifyContent="space-between"
				background="rgb(237,111,151)"
				color="rgb(129,25,40)"
				borderRadius="xl"
				shadow="lg"
				// border="solid yellow"
			>
				<Center
					flexGrow="1"
					// border="solid purple"
					//  height={{ base: "60vh", md: "73vh" }}
				>
					<Carousel
						// border="solid teal"
						activeIndex={activeIndex}
						previous={() => previous()}
						next={() => next()}
						interval={false}
					>
						{slides}
					</Carousel>
				</Center>

				<Flex
					justify="center"
					display={{ sm: "flex", md: "none" }}
					// border="solid blue"
					direction="column"
					minH="14vh"
				>
					<chakra.span
						textAlign="center"
						// minH="60px"
						// height="auto"
						flexGrow="1"
						display={{ base: "block" }}
					>
						{progressArrow(answerChosen, lastQuest)}
					</chakra.span>{" "}
					{/* <Spacer /> */}{" "}
					<Flex
						display="flex"
						// border="solid"
						justify="space-between"
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
							<Link
								_hover={{
									color: "rgb(129,25,40)",
									textDecoration: "none",
								}}
								_active={{ color: "rgb(216,218,197)" }}
								as={RouterLink}
								to="/"
							>
								Boy Howdy Trivia Bodanza
							</Link>
						</Heading>
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
							<chakra.span color="rgb(216,218,197)"> {totalScore} </chakra.span>
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
				>
					<chakra.span display={{ base: "block" }}>Boy Howdy </chakra.span>
					<chakra.span display={{ base: "block" }}>Trivia Bodanza </chakra.span>
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
		</Grid>
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
