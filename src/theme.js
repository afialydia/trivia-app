// theme.js
import "@fontsource/shrikhand"
import "@fontsource/montserrat"
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: "Shrikhand",
		body: "Montserrat",
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
