//libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import theme from "./theme.js";
import "./index.css";

//files
import App from "./App";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<AnimateSharedLayout type="crossfade">
		<AnimatePresence exitBeforeEnter initial>
			<ChakraProvider theme={theme}>
				<Provider store={store}>
					<Router>
						<App />
					</Router>
				</Provider>
			</ChakraProvider>
		</AnimatePresence>
	</AnimateSharedLayout>,
	rootElement
);
