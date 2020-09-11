import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllQuestions,totalQuestions, findCategory } from "../redux/set_up/set_up.utils";
import Questions from "../components/questions";

const GAME_PLAY = ({ selectAllQuestions, totalQuestions, findCategory }) => {

	return (
		<div>
			

			{selectAllQuestions.length > 1 ? (
				<><div>
					{/* <div><span>Category: {findCategory} </span><span>Number of Questions: {totalQuestions} </span><span>Difficulty:</span></div> */}
                        <Questions allQuestions={selectAllQuestions} />
                            
				</div>
					<div>
					<h5><span>Number of Questions: {totalQuestions} </span> <span>Correct Answers:</span></h5> 
				</div></>
			) : (
				<div>Let Get Trivial!</div>
			)}

		
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	selectAllQuestions, totalQuestions 
	
});

export default connect(mapStateToProps)(GAME_PLAY);
