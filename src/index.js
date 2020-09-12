//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//files
import App from './App';
import {store} from "./redux/store";



const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<Router>
				<App />
		</Router>
	</Provider>,
	rootElement
);


