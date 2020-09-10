import { combineReducers } from "redux";
import set_up_reducer from './set_up/set_up.reducer'

const combinedReducers = combineReducers({
set_up_reducer
});

const root_reducer = (state, action) => {
    
    return combinedReducers(state, action);
  };

export default root_reducer;
