import CardProps from "./CardContainerProps";
import img1 from "../images/icon-work.svg";
import img2 from "../images/icon-play.svg";
import img3 from "../images/icon-study.svg";
import img4 from "../images/icon-exercise.svg";
import img5 from "../images/icon-social.svg";
import img6 from "../images/icon-self-care.svg";

function CardContainer({ value }) {
	return (
		<div className='project-list-container'>
			<CardProps
				image={img1}
				alt={"work"}
				pText={"work"}
				hours={"32hrs"}
				preHours={value}
				num={"-36hrs"}
				id={"work"}
			/>
			<CardProps
				image={img2}
				alt={"play"}
				pText={"play"}
				hours={"10hrs"}
				preHours={value}
				num={"-8hrs"}
				id={"play"}
			/>
			<CardProps
				image={img3}
				alt={"study"}
				pText={"study"}
				hours={"4hrs"}
				preHours={value}
				num={"-7hrs"}
				id={"study"}
			/>
			<CardProps
				image={img4}
				alt={"exercise"}
				pText={"exercise"}
				hours={"4hrs"}
				preHours={value}
				num={"-5hrs"}
				id={"exercise"}
			/>
			<CardProps
				image={img5}
				alt={"social"}
				pText={"social"}
				hours={"5hrs"}
				preHours={value}
				num={"-10hrs"}
				id={"social"}
			/>
			<CardProps
				image={img6}
				alt={"self-care"}
				pText={"self-care"}
				hours={"2hrs"}
				preHours={value}
				num={"-2hrs"}
				id={"self-care"}
			/>
		</div>
	);
}

export default CardContainer;
