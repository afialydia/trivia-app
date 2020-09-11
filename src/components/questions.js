import React, { useState } from "react";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	Card,
	CardBody,
} from "reactstrap";
import Question from "./question";

const Questions = ({ allQuestions }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === allQuestions.length - 1 ? 0 : activeIndex + 1;
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
				<Card>
					<CardBody>
						<Question key={item} props={item} />
					</CardBody>
				</Card>
			</CarouselItem>
		);
	});

	const game_end = () => {
		return (
			<CarouselItem
				className="custom-tag"
				tag="div"
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
			>
				<Card>
					<CardBody>
						<h2>Thanks for Playing!</h2>{" "}
					</CardBody>
				</Card>
			</CarouselItem>
		);
	};
	const [clicked, setClicked] = useState(true);

	return (
		<div>
			<Carousel autoplay={false} activeIndex={activeIndex}>
				{slides}
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={next}
					className={`carousel-control-next 
						${clicked ? "one" : ""}`}
				/>
			</Carousel>
		</div>
	);
};

export default Questions;
