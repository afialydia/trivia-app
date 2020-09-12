//libraries
import React, { useState } from "react";
import { connect } from "react-redux";

//styles
import { Form, Label, FormGroup, Input, Button } from "reactstrap";

//files
import {getTriviaQuestions, loadQuestion} from "../redux/set_up/set_up.actions";


const SET_UP = ({ getTriviaQuestions, toggle, loadQuestion }) => {
	const [state, setState] = useState({
		amount: "4",
		category: "31",
		difficulty: "easy",
	});

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { amount, category, difficulty } = state;
		console.log(amount, category, difficulty);
		getTriviaQuestions({ amount, category, difficulty });
		toggle()
		loadQuestion()
	};

	return (
			<Form className="settings-form" onSubmit={handleSubmit}>
				<h4>Trivia Settings</h4>
				
				<FormGroup>
					<Label for="label">Category</Label>

					<Input
						bsSize="lg"
						type="select"
						name="category"
						onChange={handleChange}
					>
						<option value="31">Anime/Manga</option>
						<option value="23">History</option>
						<option value="11">Film</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="label">Number of Questions</Label>
					<Input
						bsSize="lg"
						type="select"
						name="amount"
						id="amount"
						onChange={handleChange}
					>
						<option>4</option>
						<option>8</option>
						<option>12</option>
					</Input>
				</FormGroup>

				<FormGroup>
					<Label for="label">Difficulty Level</Label>
					<Input
						bsSize="lg"
						type="select"
						name="difficulty"
						id="difficulty"
						onChange={handleChange}
					>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</Input>
				</FormGroup>

				<Button className="start-button">Start Game</Button>
				
			</Form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getTriviaQuestions: (data) => dispatch(getTriviaQuestions(data)),
	loadQuestion: ()=> dispatch(loadQuestion())
});

export default connect(null, mapDispatchToProps)(SET_UP);
