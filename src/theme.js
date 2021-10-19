// theme.js
import "@fontsource/shrikhand";
import "@fontsource/montserrat";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
	sm: "30em",
	md: "40em",
	lg: "44em",
	xl: "80em",
	"2xl": "96em",
});

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
				fontSize: "16px",
			},
			body: {
				bg: "rgb(244,246,222)",
				// border: "solid",
				minH: "100%",
				w: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: "0",
				margin: "0",
				boxSizing: "border-box",
			},
			components: {},
			breakpoints,

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
