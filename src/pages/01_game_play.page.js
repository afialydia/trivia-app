//libraries
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//files
import { selectAllQuestions } from "../redux/set_up/set_up.utils";
import Questions from "../components/questions";
import GameWall from "../components/game_wall";

//styles
import { Center } from "@chakra-ui/react";

const GAME_PLAY = ({ selectAllQuestions }) => {
	return (
		<Center backgroundSize="cover">
			{selectAllQuestions.length > 1 ? (
				<Questions allQuestions={selectAllQuestions} />
			) : (
				<GameWall />
			)}
		</Center>
	);
};

const mapStateToProps = createStructuredSelector({
	selectAllQuestions,
});

export default connect(mapStateToProps)(GAME_PLAY);
