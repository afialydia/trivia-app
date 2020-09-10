import React from "react";
import postToAPI from "../redux/post-smurf/post.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSmurf } from "../redux/get-smurf/smurf.selector";
import FormInput from "./FormInput";
import getAPI from "../redux/get-smurf/smurf.actions";

import "./components.css";

class VillagerForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			age: "",
			height: ""
		};
	}

	componentDidUpdate(){
		this.props.welcome()
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		this.props.newvillager(this.state);
		this.setState({
			name: "",
			age: "",
			height: ""
		});
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<h2>Welcome New Villager</h2>

				<form className="form" onSubmit={this.handleSubmit}>
					<div>
						<FormInput
							name="name"
							type="text"
							handleChange={this.handleChange}
							value={this.state.name}
							label="name"
							required
						/>
						<FormInput
							name="age"
							type="text"
							value={this.state.age}
							handleChange={this.handleChange}
							label="age"
							required
						/>
						<FormInput
							name="height"
							type="text"
							value={this.state.height}
							handleChange={this.handleChange}
							label="height"
							required
						/>
					</div>
					<div>
						<button className="button" type="submit">
							New Villager
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	villagers: selectSmurf
});

const mapDispatchToProps = dispatch => ({
	newvillager: villager => dispatch(postToAPI(villager)),
	welcome: () => dispatch(getAPI())

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Set_Up_orm);
