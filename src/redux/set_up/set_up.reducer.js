import { Set_Up_Types } from "./set_up.utils";

const initialState = {
	questions: [],
	isFetching: false,
	fetched: false,
	error: ""
};

const set_up_reducer = (state = initialState, action) => {
	switch (action.type) {
        case Set_Up_Types.GET_START:
			return {
				...state,
				isFetching: true
			};

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

export default set_up_reducer;