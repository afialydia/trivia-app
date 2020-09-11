import { combineReducers } from "redux";
import set_up_reducer from './set_up/set_up.reducer'
import questions_reducer from './questions/questions.reducer'

const combinedReducers = combineReducers({
set_up_reducer,
questions_reducer
});

const root_reducer = (state, action) => {
    
    return combinedReducers(state, action);
  };

export default root_reducer;
