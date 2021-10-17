//libraries
import React from "react";

//styles
import {
	Flex,
	Image,
	FormControl,
	FormLabel,
	Button,
	chakra,
	Select,
	Box,
	Center,
	Heading,
} from "@chakra-ui/react";

const PinkContainer = ({ handleChange, handleSubmit }) => {
	return (
		<Flex
			justifyContent="space-evenly"
			textAlign="center"
			direction="column"
			w="100%"
			minH="100%"
			background="rgb(237,111,151)"
			color="rgb(129,25,40)"
			borderRadius="xl"
			shadow="lg"
			justify="center"
			align="stretch"
			padding="1.5em"
			// border="solid red"
		>
			<Box
				//  border="solid"
				w="100%"
				// minH="100%"
			>
				<Heading
					fontFamily="Shrikhand"
					letterSpacing="wider"
					lineHeight="short"
					fontWeight="hairline"
				>
					<chakra.span display={{ base: "block" }}>Boy Howdy </chakra.span>
					<chakra.span display={{ base: "block" }}>Trivia Bodanza </chakra.span>
				</Heading>
				<chakra.p
					mt={{ base: 3, sm: 5, md: 5 }}
					mx={{ sm: "auto", lg: 0 }}
					// mb={4}
					fontSize={{ base: "lg", md: "xl" }}
					lineHeight="base"
				>
					Test your trivia knowledge.
				</chakra.p>
			</Box>
			<Center
				// border="solid .5px" borderRadius="xl"
				my={4}
			>
				<Image
					src="/cowboy.svg"
					w="65%"
					// boxSize={{ base: "auto" }}
					fit="contain"
					alt="BoyHowdyTrivia"
					// margin="auto 0"
					// display={{ base: "none", sm: "none", md: "block" }}
				/>
			</Center>
			<Box
			// border="solid"
			>
				<chakra.form
					className="settings-form"
					// textAlign="center"
					onSubmit={handleSubmit}
					// border="solid"
					display="flex"
					flexDirection="column"
				>
					<FormControl
						// border="solid"
						id="category"
						display="flex"
						flexDir="column"
						// justifyContent="space-around"
						// alignContent="center"
						// justifyContent="center"
						// justifyItems="center"
						// alignItems='center'
						// margin='0'
					>
						<FormLabel htmlFor="Choose your Category">
							<Heading
								as="h5"
								size={{ base: "sm", sm: "md" }}
								letterSpacing="widest"
								lineHeight="short"
								textAlign="center"
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
							// border="solid .5px"
							textAlign="center"
						>
							<option value="31">Anime/Manga</option>
							<option value="23">History</option>
							<option value="11">Film</option>
						</Select>
					</FormControl>
					{/* <Spacer /> */}
					<FormControl id="amount">
						<FormLabel htmlFor="Amount of Questions">
							{" "}
							<Heading
								as="h5"
								size={{ base: "sm", sm: "md" }}
								letterSpacing="widest"
								lineHeight="short"
								textAlign="center"
							>
								# of Questions
							</Heading>
						</FormLabel>
						<Select
							isRequired
							name="amount"
							placeholder="Select Number of Questions"
							onChange={handleChange}
							border="transparent"
							focusBorderColor="rgb(129,25,40)"
							textAlign="center"
						>
							<option>4</option>
							<option>8</option>
							<option>12</option>
						</Select>
					</FormControl>
					{/* <Spacer /> */}
					<FormControl id="difficulty">
						<FormLabel htmlFor="Difficulty">
							{" "}
							<Heading
								as="h5"
								size={{ base: "sm", sm: "md" }}
								letterSpacing="widest"
								lineHeight="short"
								textAlign="center"
							>
								Difficulty
							</Heading>
						</FormLabel>
						<Select
							isRequired
							placeholder="Select Your Difficulty"
							name="difficulty"
							onChange={handleChange}
							border="transparent"
							focusBorderColor="rgb(129,25,40)"
							textAlign="center"
						>
							<option value="easy">Easy</option>
							<option value="medium">Medium</option>
							<option value="hard">Hard</option>
						</Select>
					</FormControl>
					{/* <Spacer /> */}
					<Button
						color="rgb(237,111,151)"
						background="rgb(129,25,40)"
						my="1%"
						type="submit"
						className="start-button"
						_hover={{ background: "rgb(216,218,197)" }}
					>
						Start Game
					</Button>{" "}
				</chakra.form>
			</Box>
		</Flex>
	);
};

export default PinkContainer;
