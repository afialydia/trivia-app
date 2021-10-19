//libraries
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { motion } from "framer-motion";

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
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<Questions allQuestions={selectAllQuestions} />
				</motion.div>
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<GameWall />
				</motion.div>
			)}
		</Center>
	);
};

const mapStateToProps = createStructuredSelector({
	selectAllQuestions,
});

export default connect(mapStateToProps)(GAME_PLAY);
