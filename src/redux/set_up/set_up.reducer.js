//files
import { Set_Up_Types } from "./set_up.utils";

const initialState = {
	questions: [],
	score: 0,
	clicked: false,
	correct: undefined,
	isFetching: false,
	fetched: false,
	error: "",
};

const set_up_reducer = (state = initialState, action) => {
	switch (action.type) {
		case Set_Up_Types.GET_START:
			return {
				...state,
				isFetching: true,
			};

		case Set_Up_Types.GET_SUCCESS:
			return {
				...state,
				isFetching: false,
				fetched: true,
				clicked: false,
				correct: undefined,
				score: 0,
				questions: action.payload,
				error: "",
			};
		case Set_Up_Types.GET_FAIL:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};

		case Set_Up_Types.SET_CORRECT_ANSWER:
			return {
				...state,
				score: (state.score += 1),
				clicked: true,
				correct: true,
			};

		case Set_Up_Types.SET_CORRECT_ANSWER_LIMIT:
			return {
				...state,
				clicked: true,
				correct: true,
			};

		case Set_Up_Types.SET_INCORRECT_ANSWER:
			return {
				...state,
				clicked: true,
				correct: false,
			};

		case Set_Up_Types.SET_GAME_OVER:
			return {
				...state,
				score: state.score,
			};

		case Set_Up_Types.SET_LOAD_QUESTION:
			return {
				...state,
				clicked: false,
				correct: initialState.correct,
			};

		case Set_Up_Types.SET_GAME_RESET:
			return initialState;

		default:
			return state;
	}
};

export default set_up_reducer;
