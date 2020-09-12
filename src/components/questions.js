//libraries
import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//styles
import {
	Carousel,
	CarouselItem,
	CarouselControl
} from "reactstrap";

//files
import Question from "./question";
import { loadQuestion } from "../redux/set_up/set_up.actions";
import { answerChosen, isCorrectAnswer } from "../redux/set_up/set_up.utils";



const Questions = ({
	allQuestions,
	answerChosen,
	loadQuestion,
	isCorrectAnswer
	
}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === allQuestions.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
		loadQuestion();
	};
	const previous = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === 0 ? allQuestions.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
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
				<Question key={item} props={item} activeIndex={activeIndex} />
			</CarouselItem>
		);
	});

	return (
		<div>
			<Carousel
				activeIndex={activeIndex}
				previous={() => previous()}
				next={() => next()}
				interval={false}
			>
				{slides}

				{answerChosen ? (
					<CarouselControl
						direction="next"
						directionText="Next"
						onClickHandler={next}
						className={`carousel-control-next 
						${isCorrectAnswer ? "one" : "two"}`}
					/>
				) : (
					""
				)}
			</Carousel>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	answerChosen,
	isCorrectAnswer
	
});

const mapDispatchToProps = (dispatch) => ({
	loadQuestion: () => dispatch(loadQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
