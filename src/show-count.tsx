import React, { useContext, useState } from "react";

// import { useStore } from "./store";
import { Store } from "./store";
import { IState } from "./store";

const ShowCount = () => {
	const { state, dispatch } = useContext(Store);
	function sayHello() {
		dispatch({
			type: "INCREMENT",
			message: "I've dispatched an event",
		});
		console.log(state);
	}

	return (
		<div style={containerStyles}>
			<h1>{state.count}</h1>
			<button onClick={() => sayHello()}>click me!</button>
		</div>
	);
};

function getData() {
	fetch("https://jsonplaceholder.typicode.com/todos/1")
		.then((response) => response.json())
		.then((json) => console.log(json));
}

const containerStyles = {
	width: "500px",
	margin: "auto",
};

export default ShowCount;
