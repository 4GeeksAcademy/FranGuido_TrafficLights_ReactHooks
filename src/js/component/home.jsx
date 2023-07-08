import React, {useState} from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [ lightColor, setlightColor] = useState("green");
	return (
		<div className="container text-center mt-5">
			<div className="row justify-content-center">
				<div onClick={() => setlightColor("red")} className={"col-1 light  red" + ((lightColor === "red") ? " glowRed" : "")}></div>
			
				<div onClick={() => setlightColor("yellow")} className={"col-1 light  yellow" + ((lightColor === "yellow") ? " glowYellow" : "")}></div>
		
				<div onClick={() => setlightColor("green")} className={"col-1 light  green" + ((lightColor === "green") ? " glowGreen" : "")}></div>
			</div>
		</div>
	);
};

export default Home;
