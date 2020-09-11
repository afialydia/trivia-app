import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllQuestions,totalQuestions, totalScore, isCorrectAnswer } from "../redux/set_up/set_up.utils";
import Questions from "../components/questions";

const GAME_PLAY = ({ selectAllQuestions, totalQuestions, totalScore, isCorrectAnswer }) => {

	const isCorrect = (isCorrectAnswer) => {
		if(isCorrectAnswer === undefined){
			return ""
		}else if(isCorrectAnswer === true){
			return <h3>Correct!</h3> 
		}
			return <h3>Incorrect!</h3>
		
	}

	return (
		<div>
			

			{selectAllQuestions.length > 1 ? (
				<><div>
						{isCorrect(isCorrectAnswer)}
						 <Questions allQuestions={selectAllQuestions} />
                            
				</div>
					<div>
			<h5><span>Number of Questions: {totalQuestions} </span> <span>Score: {totalScore}</span></h5> 
				</div></>
			) : (
				<div>Let Get Trivial!</div>
			)}

		
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	selectAllQuestions, totalQuestions, totalScore, isCorrectAnswer
	
});

export default connect(mapStateToProps)(GAME_PLAY);
