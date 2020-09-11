
//selectors and types

export const Set_Up_Types ={
    GET_START:  'GET_START',
    GET_SUCCESS: 'GET_SUCCESS',
    GET_FAIL: 'GET_FAIL'
    
}

export const selectAllQuestions = (state) => state.set_up_reducer.questions;

export const totalQuestions = (state) => state.set_up_reducer.questions.length;



