import React from "react";
import { Card, CardBody } from "reactstrap";

const Question = ({ props }) => {
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


	return (
		<Card>
			<CardBody>
				<h4>{question}</h4>
				{options.map((option) => {
					return <div key={option}>{option}</div>;
				})}
			</CardBody>
		</Card>
	);
};

export default Question;
