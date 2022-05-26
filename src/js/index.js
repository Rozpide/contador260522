//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "bootstrap";
{
	/* <script
	src="https://kit.fontawesome.com/4d7c642ba9.js"
	crossorigin="anonymous"></script>; */
}
//import "./component/icons.js";
//import your own components

function SimpleCounter(props) {
	return (
		<div className="bigcounter">
			<div className="calendar">
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number,
};
let counter = 0;
setInterval(function () {
	let four = Math.floor(counter / 1000);
	let three = Math.floor(counter / 100);
	let two = Math.floor(counter / 10);
	let one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,

		document.querySelector("#app")
	);
}, 1000);

//render your react application
