//libraries
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link as RouterLink } from "react-router-dom";

//files
import { selectAllQuestions } from "../redux/set_up/set_up.utils";
import Questions from "../components/questions";

//styles
import {
	Center,
	Flex
} from "@chakra-ui/react";
import GameWall from "../components/game_wall";

const GAME_PLAY = ({ selectAllQuestions }) => {
	return (
		<Center backgroundSize="cover">
			{selectAllQuestions.length > 1 ? (
				<Flex>
					<Questions allQuestions={selectAllQuestions} />
				</Flex>
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
