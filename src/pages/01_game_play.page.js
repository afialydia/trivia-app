//libraries
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//files
import { selectAllQuestions } from "../redux/set_up/set_up.utils";
import Questions from "../components/questions";

const GAME_PLAY = ({ selectAllQuestions }) => {
	return (
		<div>
			{selectAllQuestions.length > 1 ? (
				<Questions allQuestions={selectAllQuestions} />
			) : (
				<div>
					<h1>Let Get Trivial!</h1>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	selectAllQuestions,
});

export default connect(mapStateToProps)(GAME_PLAY);
