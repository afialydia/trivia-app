import React, { useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import "./components.styles.css";

const Question = ({ props, right_answer }) => {
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

	// const { status, setStatus } = useState("");

	// const result = (option) => {
	// 	if (option == correct) {
	// 		setStatus("Congrats! You're right!");
	// 	} else {
	// 		setStatus("Oops! No Dice.");
	// 	}
	// };
	const [clicked, setClicked] = useState(false);

	return (
		<>
			<Card>
				<CardBody>
					<h4>{question}</h4>
					{options.map((option) => {
						return (
							<div>
								<Button
									onClick={()=> setClicked(true)}
									className={`options ${
										option === correct && clicked ? "one" : "two" 
									}`}
									key={option}
								>
									{option}
								</Button>
							</div>
						);
					})}

					{/* <h4>{status}</h4> */}
				</CardBody>
			</Card>
		</>
	);
};

export default Question;
