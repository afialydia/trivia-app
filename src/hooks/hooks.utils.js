//libraries
import React from "react";

//styles
import { Alert, Modal, ModalHeader, ModalBody , Button} from "reactstrap";


const ResultHeight = ({color=null,answer=null}) =>{
	return(
		<div style={{border:'none', height:'5vh', margin:'2%auto',display:'flex', flexDirection:'column', alignItems:'center'}}>
			<h5 style={{ hight:'3vh',color: {color}}}>{answer}</h5>
		</div>
	)
}

// display's whether question was answered correctly or not
export	const isCorrect = (isCorrectAnswer, correct) => {
		//initial state upon "question load"
        if (isCorrectAnswer === undefined) {
			return <ResultHeight/>;

        // correct answer
		} else if (isCorrectAnswer === true) {
			return <ResultHeight color={'green'} answer={'Correct!'} />
		}
        // incorrect answer 
		return (
			<ResultHeight color={'red'} answer={`Incorrect! The answer is ${correct}.`} />

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