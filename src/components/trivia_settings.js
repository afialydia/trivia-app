//libraries
import React, { useState } from "react";
import { connect } from "react-redux";

//styles
import {
	Flex,
	Image,
	FormControl,
	FormLabel,
	Button,
	VStack,
	chakra,
	Select,
	Box,
	Center,
	Spacer,
	Heading,
	Grid,
} from "@chakra-ui/react";

//files
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
		<Grid
			templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
			place-items="center"
			h="100vh"
		>
			<Center
				textAlign="center"
				w={{ base: "auto", sm: "85vw" }}
				maxW="545px"
				p="50px"
				height={{ base: "80vh", sm: "93.25vh" }}
				my="auto"
				mx="auto"
				maxH="585px"
				minH="575px"
				// border="solid"
				background="rgb(237,111,151)"
				color="rgb(129,25,40)"
				borderRadius="xl"
				shadow="lg"
			>
				<Box>
					<Heading
						fontSize={{ base: "3xl", sm: "4xl" }}
						fontFamily="Shrikhand"
						letterSpacing="wider"
						lineHeight="short"
						fontWeight="hairline"
					>
						<chakra.span display={{ base: "block" }}>Boy Howdy </chakra.span>
						<chakra.span display={{ base: "block" }}>
							Trivia Bodanza{" "}
						</chakra.span>
					</Heading>
					<chakra.p
						mt={{ base: 3, sm: 5, md: 5 }}
						mx={{ sm: "auto", lg: 0 }}
						mb={6}
						fontSize={{ base: "lg", md: "xl" }}
						lineHeight="base"
					>
						Test your trivia knowledge.
					</chakra.p>
					<VStack>
						<chakra.form
							className="settings-form"
							textAlign="center"
							// border="solid red"
							onSubmit={handleSubmit}
						>
							<Flex
								direction="column"
								// border="solid blue"
								width={{ base: "auto", md: "md" }}
								height="55vh"
							>
								<Spacer />
								<FormControl id="category">
									<FormLabel>
										<Heading
											as="h5"
											size="md"
											letterSpacing="widest"
											lineHeight="short"
										>
											Category
										</Heading>
									</FormLabel>

									<Select
										isRequired
										name="category"
										placeholder="Select a Category"
										onChange={handleChange}
										border="transparent"
										focusBorderColor="rgb(129,25,40)"
									>
										<option value="31">Anime/Manga</option>
										<option value="23">History</option>
										<option value="11">Film</option>
									</Select>
								</FormControl>
								<Spacer />
								<FormControl id="amount">
									<FormLabel>
										{" "}
										<Heading
											as="h5"
											size="md"
											letterSpacing="widest"
											lineHeight="short"
										>
											Number of Questions
										</Heading>
									</FormLabel>
									<Select
										isRequired
										name="amount"
										placeholder="Select Number of Questions"
										onChange={handleChange}
										border="transparent"
										focusBorderColor="rgb(129,25,40)"
									>
										<option>4</option>
										<option>8</option>
										<option>12</option>
									</Select>
								</FormControl>
								<Spacer />
								<FormControl id="difficulty">
									<FormLabel for="label">
										{" "}
										<Heading
											as="h5"
											size="md"
											letterSpacing="widest"
											lineHeight="short"
										>
											Difficulty Level
										</Heading>
									</FormLabel>
									<Select
										isRequired
										placeholder="Select Your Difficulty"
										name="difficulty"
										onChange={handleChange}
										border="transparent"
										focusBorderColor="rgb(129,25,40)"
									>
										<option value="easy">Easy</option>
										<option value="medium">Medium</option>
										<option value="hard">Hard</option>
									</Select>
								</FormControl>
								<Spacer />
								<Button
									color="rgb(237,111,151)"
									background="rgb(129,25,40)"
									my="1vh"
									type="submit"
									className="start-button"
									_hover={{ background: "rgb(216,218,197)" }}
								>
									Start Game
								</Button>{" "}
							</Flex>
						</chakra.form>
					</VStack>
				</Box>
			</Center>
			<Image
				src="/cowboy.svg"
				boxSize={{ base: "auto" }}
				objectFit="cover"
				alt="BoyHowdyTrivia"
				margin="auto 0"
				display={{ base: "none", sm: "none", md: "block" }}
			/>
		</Grid>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getTriviaQuestions: (data) => dispatch(getTriviaQuestions(data)),
	loadQuestion: () => dispatch(loadQuestion()),
});

export default connect(null, mapDispatchToProps)(TriviaSettings);
