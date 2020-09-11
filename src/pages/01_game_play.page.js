import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllQuestions } from "../redux/set_up/set_up.utils";
import Questions from "../components/questions";

const GAME_PLAY = ({ selectAllQuestions }) => {
	selectAllQuestions.forEach((element) => {
		// console.log(element);
	});
	console.log(selectAllQuestions.length);
	return (
		<div>
			{/* <div><span>Category:</span><span>Number of Questions:</span><span>Difficulty:</span></div> */}

			{selectAllQuestions.length > 1 ? (
				<div>
					{/* {selectAllQuestions.map((trivia_question) => {
                       
                        return ( */}
                        <Questions allQuestions={selectAllQuestions} />
                            
					{/* })} */}
				</div>
			) : (
				<div>Let Get Trivial!</div>
			)}

			<div>
				<h5>Correct Answers:</h5>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	selectAllQuestions,
});

export default connect(mapStateToProps)(GAME_PLAY);
