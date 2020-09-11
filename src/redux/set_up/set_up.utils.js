//selectors and types

export const Set_Up_Types = {
	GET_START: "GET_START",
	GET_SUCCESS: "GET_SUCCESS",
	GET_FAIL: "GET_FAIL",
	SET_CORRECT_ANSWER: "SET_CORRECT_ANSWER",
	SET_INCORRECT_ANSWER: "SET_INCORRECT_ANSWER",
	SET_GAME_OVER: "SET_GAME_OVER",
	SET_GAME_RESET: "SET_GAME_RESET",
	SET_LOAD_QUESTION: "SET_LOAD_QUESTION",
};

export const selectAllQuestions = (state) => state.set_up_reducer.questions;

export const totalQuestions = (state) => state.set_up_reducer.questions.length;

export const totalScore = (state) => state.set_up_reducer.score;

export const answerChosen = (state) => state.set_up_reducer.clicked;

export const isCorrectAnswer = (state) => state.set_up_reducer.correct;

