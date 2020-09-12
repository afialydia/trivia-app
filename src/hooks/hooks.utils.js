//libraries
import React from "react";

//styles
import { Alert } from "reactstrap";


// display's whether question was answered correctly or not
export	const isCorrect = (isCorrectAnswer, correct) => {
		//initial state upon "question load"
        if (isCorrectAnswer === undefined) {
			return "";

        // correct answer
		} else if (isCorrectAnswer === true) {
			return <h5 style={{ color: "green" }}>Correct!</h5>;
		}
        // incorrect answer 
		return (
			<h5 style={{ color: "red" }}>{`Incorrect! The answer is ${correct}!`}</h5>
		);
	};


//end of game handling, sends alert to player when they have chosen an answer on the last question
export const endOfGame = (totalQuestions, answerChosen, gameOver ,activeIndex) => {
		if (activeIndex + 1 === totalQuestions && answerChosen) {
			return (
				<div>
					<Alert className="game-over" color="success">
						<h6 className="alert-heading">
							Well done! You've completed the Trivia Quiz!
						</h6>
						<p>
							Feel free to improve upon your score by clicking the next button
							or to try your hand at one of the{" "}
							<a href=".">other categories</a>! Have a great day!
						</p>
					</Alert>
					{gameOver()}
				</div>
			);
		}
	};