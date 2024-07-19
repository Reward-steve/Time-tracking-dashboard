import { useState } from "react";
import "./scssComponent/index.scss";
import OverallContainer from "./component/OverallContainer";
import CardContainer from "./component/CardContainer";

function App() {
	const [current, currentState] = useState("Last Week");

	const Daily = () => {
		currentState("Yesterday");
	};
	const Weekly = () => {
		currentState("Last Week");
	};
	const Monthly = () => {
		currentState("Last Month");
	};
	return (
		<div className='dashboard-container'>
			<div className='dashboard'>
				<OverallContainer Daily={Daily} Weekly={Weekly} Monthly={Monthly} />
				<CardContainer value={current} />
			</div>
		</div>
	);
}

export default App;
