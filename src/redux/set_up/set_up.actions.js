//libraries
import axios from "axios";

//files
import { Set_Up_Types } from "./set_up.utils";

//api call
export const getTriviaQuestions = (data) => (dispatch) => {
	dispatch({ type: Set_Up_Types.GET_START });
	axios
		.get(
			// `https://opentdb.com/api.php?amount=4&category=23&difficulty=easy&type=multiple&encode=url3986`
			`https://opentdb.com/api.php?amount=${data.amount}&category=${data.category}&difficulty=${data.difficulty}&type=multiple&encode=url3986`
		)
		.then(
			(response) =>
				dispatch({
					type: Set_Up_Types.GET_SUCCESS,
					payload: response.data.results,
				}),

			[]
		)
		.catch((err) =>
			dispatch({ type: Set_Up_Types.GET_FAIL, payload: err.response })
		);
};

export const loadQuestion = (props) => (dispatch) => {
	dispatch({ type: Set_Up_Types.SET_LOAD_QUESTION });
};

export const correctAnswer = (totalScore, totalQuestions) => (dispatch) => {
	//error handling for score limit
	totalScore === totalQuestions
		? dispatch({ type: Set_Up_Types.SET_CORRECT_ANSWER_LIMIT })
		: dispatch({ type: Set_Up_Types.SET_CORRECT_ANSWER });
};

export const incorrectAnswer = () => (dispatch) => {
	dispatch({ type: Set_Up_Types.SET_INCORRECT_ANSWER });
};

export const gameOver = () => (dispatch) => {
	dispatch({ type: Set_Up_Types.SET_GAME_OVER });
};
