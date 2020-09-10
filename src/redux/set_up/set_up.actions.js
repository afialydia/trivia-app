import { Set_Up_Types } from "./set_up.utils";
import axios from 'axios'

 const getTriviaQuestions = () => dispatch => {
	dispatch({ type: Set_Up_Types.GET_START });
	axios
		.get('https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple')
		.then(response =>
			dispatch({ type: Set_Up_Types.GET_SUCCESS, payload: response.data })
		,[])
		.catch(err =>
			dispatch({ type: Set_Up_Types.GET_FAIL, payload: err.response })
		);
};

export default getTriviaQuestions