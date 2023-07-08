import React, {useState} from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [ lightColor, setlightColor] = useState("");
	return (
		<div className="container text-center">
			<div className="pole"></div>
			<div className="trafficLight row justify-content-center">
				<div onClick={() => setlightColor("red")} className={"col-1 light  red" + ((lightColor === "red") ? " glowRed" : "")}></div>
			
				<div onClick={() => setlightColor("yellow")} className={"col-1 light  yellow" + ((lightColor === "yellow") ? " glowYellow" : "")}></div>
		
				<div onClick={() => setlightColor("green")} className={"col-1 light  green" + ((lightColor === "green") ? " glowGreen" : "")}></div>
			</div>
			<div className="row mt-4">
				
				<button onClick={() => setlightColor("")} className="btn btn-primary">Turn off</button>
			</div>
		</div>
	
	);
};

export default Home;
