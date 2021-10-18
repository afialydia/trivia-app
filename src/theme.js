// theme.js
import "@fontsource/shrikhand";
import "@fontsource/montserrat";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: "Shrikhand",
		body: "Montserrat",
	},
	styles: {
		global: {
			// styles for the `body`
			html: {
				h: "100%",
			},
			body: {
				bg: "rgb(244,246,222)",
				// border: "solid",
				minH: "100%",
				w: "100%",
				display: "flex",
				flexDirection: "column",
				padding: "0",
				margin: "0",
				boxSizing: "border-box",
			},
			components: {
		
			
			},

			// styles for the `a`
		},
	},
});

export default theme;
// export default {
//     colors: {
//       transparent: "transparent",
//       black: "#000",
//       white: "#fff",
//       gray: {
//         50: "#f7fafc",
//         // ...
//         900: "#171923",
//       },
//     },
//   }
