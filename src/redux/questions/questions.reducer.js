import { Set_Up_Types } from "../set_up/set_up.utils";

const initialState = {
    questions: [],
    question:{},
	isFetching: false,
	fetched: false,
	error: ""
};

const questions_reducer = (state = initialState, action) => {
	switch (action.type) {

		case Set_Up_Types.GET_SUCCESS:
			return {
				...state,
				isFetching: false,
				fetched:true,
				questions: action.payload,
				error: ""
			};
		case Set_Up_Types.GET_FAIL:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default questions_reducer;