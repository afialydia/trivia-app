//Libraries
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//styles
import "./styles.css";
import { Button, Card, CardBody, Alert } from "reactstrap";

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
	const question = decodeURIComponent(props.question);
	const correct = decodeURIComponent(props.correct_answer);
	const options = [];

	options.push(correct);

	props.incorrect_answers.forEach((answer) => {
		const incorrect = decodeURIComponent(answer);
		options.push(incorrect);
	});

	//randomizing options
	for (let i = options.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		const temp = options[i];
		options[i] = options[j];
		options[j] = temp;
	}

	
	const isCorrect = (isCorrectAnswer, correct) => {
		if (isCorrectAnswer === undefined) {
			return "";
		} else if (isCorrectAnswer === true) {
			return <h5 style={{ color: "green" }}>Correct!</h5>;
		}
		return (
			<h5 style={{ color: "red" }}>{`Incorrect! The answer is ${correct}!`}</h5>
		);
	};

	const endOfGame = (activeIndex) => {
		if (activeIndex + 1 === totalQuestions && answerChosen) {
			return (
				<div>
					<Alert className="game-over" color="success">
						<h6 className="alert-heading">
							Well done! You've completed the Trivia Quiz!
						</h6>
						<p>
							Feel free to improve upon your score by clicking the next button
							or to trying your hand at one of the{" "}
							<a href=".">other categories!</a> Have a great day!
						</p>
					</Alert>
					{gameOver()}
				</div>
			);
		}
	};

	return (
		<>
			<Card className="card">
				<CardBody className="question">
					{endOfGame(activeIndex)}
					<h4>{question}</h4>
					<br /> {isCorrect(isCorrectAnswer, correct)}
					<br />
					{options.map((option) => {
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
					<br />
					<h6>
						{" "}
						Question: {activeIndex + 1} of {totalQuestions}{" "}
					</h6>
					<h6>Score: {totalScore}</h6>
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
