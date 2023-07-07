import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container text-center mt-5">
			<div className="row justify-content-center">
				<div className="light redLight col-1"></div>
			
				<div className="light yellowLight col-1"></div>
		
				<div className="light greenLight col-1"></div>
			</div>
		</div>
	);
};

export default Home;
