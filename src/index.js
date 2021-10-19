//libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import theme from "./theme.js";
import "./index.css";

//files
import App from "./App";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<ChakraProvider resetCSS theme={theme}>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</ChakraProvider>,
	rootElement
);
