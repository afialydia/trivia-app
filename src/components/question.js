//Libraries
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//styles
import "./styles.css";
import { Button, Card, CardBody } from "reactstrap";

//files
import {
	correctAnswer,
	gameOver,
	incorrectAnswer,
} from "../redux/set_up/set_up.actions";
import {
	isCorrectAnswer,
	totalQuestions,
	lastQuestion,
	answerChosen,
	totalScore,
} from "../redux/set_up/set_up.utils";
import { isCorrect, endOfGame } from "../hooks/hooks.utils.js";

const Question = ({
	props,
	activeIndex,
	correctAnswer,
	incorrectAnswer,
	isCorrectAnswer,
	totalQuestions,
	answerChosen,
	gameOver,
	totalScore,
}) => {
	const [triviaAnswers, setTriviaAnswers] = useState([]);

	const question = decodeURIComponent(props.question);
	const correct = decodeURIComponent(props.correct_answer);
	const options = [];

	options.push(correct);

	props.incorrect_answers.forEach((answer) => {
		const incorrect = decodeURIComponent(answer);
		options.push(incorrect);
	});


	//randomizing options so that correct answer does not sit in the same place each time
	useEffect(() => {
		console.log('look',options)
		let randomizedIndex = (i) => {
			return Math.floor(Math.random() * i);
		};

		for (let i = options.length - 1; i > 0; i--) {
			const j = randomizedIndex(i);
			const temp = options[i];
			options[i] = options[j];
			options[j] = temp;
		
		}
		return setTriviaAnswers(options);
		 
	}, []);




	return (
		<>
			<Card className="card">
				<CardBody className="question">
					{endOfGame(totalQuestions, answerChosen, gameOver, activeIndex)}
					<div>
						<h4>{question}</h4>
					</div>
					<br />
					{triviaAnswers.map((option) => {
						return (
							<div key={option}>
								<Button
									onClick={() => {
										option === correct
											? correctAnswer(totalScore, totalQuestions)
											: incorrectAnswer();
									}}
									disabled={answerChosen ? true : false}
									className="options"
									key={option}
								>
									{option}
								</Button>
							</div>
						);
					})}
					{isCorrect(isCorrectAnswer, correct)}
				</CardBody>
			</Card>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	isCorrectAnswer,
	totalQuestions,
	lastQuestion,
	answerChosen,
	totalScore,
});

const mapDispatchToProps = (dispatch) => ({
	correctAnswer: (totalScore, totalQuestions) =>
		dispatch(correctAnswer(totalScore, totalQuestions)),
	incorrectAnswer: () => dispatch(incorrectAnswer()),
	gameOver: () => dispatch(gameOver()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
