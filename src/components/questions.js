import React, { useState } from "react";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	Card,
	CardBody,
} from "reactstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Question from "./question";
import { loadQuestion} from "../redux/set_up/set_up.actions";
import {answerChosen} from '../redux/set_up/set_up.utils'

const Questions = ({ allQuestions,answerChosen, loadQuestion }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === allQuestions.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
		loadQuestion()
	};

	const slides = allQuestions.map((item) => {
		return (
			<CarouselItem
				className="custom-tag"
				tag="div"
				key={item.question}
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
			>
				<Card>
					<CardBody>
						<Question key={item} props={item} />
					</CardBody>
				</Card>
			</CarouselItem>
		);
	});


	return (
		<div>
			<Carousel autoplay={false} activeIndex={activeIndex}>
				{slides}
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={next}
					className={`carousel-control-next 
						${answerChosen ? "one" : ""}`}
				/>
			</Carousel>
		</div>
	);
};

const mapStateToProps =  createStructuredSelector({
	answerChosen
});

const mapDispatchToProps = (dispatch) => ({
	loadQuestion: ()=> dispatch(loadQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);