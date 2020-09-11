import { Set_Up_Types } from "./set_up.utils";
import axios from 'axios'

 const getTriviaQuestions = (data) => dispatch => {
	dispatch({ type: Set_Up_Types.GET_START });
	axios
		.get(`https://opentdb.com/api.php?amount=${data.amount}&category=${data.category}&difficulty=${data.difficulty}&type=multiple&encode=url3986`)
        .then(response =>
            dispatch({ type: Set_Up_Types.GET_SUCCESS, payload: response.data.results })
            
            
		,[])
		.catch(err =>
			dispatch({ type: Set_Up_Types.GET_FAIL, payload: err.response })
		);
};

export default getTriviaQuestions