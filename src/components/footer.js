//libraries
import React from "react";
import { Link as RouterLink } from "react-router-dom";

//files

//styles
import {
	Center,
	Link,
	Text,
	Heading,
	chakra,
	Image,
	Spacer,
	Grid,
} from "@chakra-ui/react";

const Footer = () => {
	return (
		<Center
			// h="3%"
			// border="solid red"
			w="full"
			background="rgb(216,218,197)"
		>
			<Link
				// border='solid green'
				_hover={{
					color: "rgb(129,25,40)",
					textDecoration: "none",
				}}
				_active={{ color: "rgb(216,218,197)" }}
				// as={RouterLink}
				to="https://www.afiacaruso.com"
			>
				<Text textAlign="center" fontWeight="bold" color="rgb(237,111,151)">
					Made with{" "}
					<chakra.span
						// fontFamily="Shrikhand"
						letterSpacing="wider"
						lineHeight="short"
						fontWeight="extrabold"
						textAlign="center"
						color="rgb(129,25,40)"
						// display={{ base: "block" }}
					>
						a 😉 + a nod
					</chakra.span>{" "}
					by{" "}
					<chakra.span
						// fontFamily="Shrikhand"
						fontWeight="extrabold"
						letterSpacing="wider"
						lineHeight="short"
						textAlign="center"
						color="rgb(129,25,40)"
						// display={{ base: "block" }}
					>
						Afia Caruso{" "}
					</chakra.span>
				</Text>
			</Link>
		</Center>
	);
};

export default Footer;
