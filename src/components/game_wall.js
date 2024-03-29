//libraries
import React from "react";
import { Link as RouterLink } from "react-router-dom";

//files

//styles
import {
	Link,
	Text,
	Heading,
	chakra,
	Image,
	Spacer,
	Center,
} from "@chakra-ui/react";

const GameWall = () => {
	return (
		<Center
			h="100%"
			// border="solid red"
			w="full"
		>
			<Spacer />
			<Link
				// border='solid green'
				_hover={{
					color: "rgb(129,25,40)",
					textDecoration: "none",
				}}
				_active={{ color: "rgb(216,218,197)" }}
				as={RouterLink}
				to="/"
			>
				<Image
					// border='solid blue'
					src="/cowboy.svg"
					boxSize={{ base: "auto" }}
					objectFit="cover"
					alt="BoyHowdyTrivia"
					margin="0auto"
					maxW="600px"
					background="rgb(237,111,151)"
					borderRadius="full"
					shadow="xl"
					display={{ md: "block" }}
				/>

				<Heading
					// border="solid"
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
				</Heading>
				<Spacer />
				<Text textAlign="center" fontWeight="bold" color="rgb(237,111,151)">
					Looks like you haven't selected any questions? <br />
					Click above to go to the home page.{" "}
				</Text>
			</Link>
			<Spacer />
		</Center>
	);
};

export default GameWall;
