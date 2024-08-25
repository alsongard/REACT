//Child component recieving a state value
import React from "react";
import CountComponent from "./countComponent";
function CountProp(){
	const [count, setCount] = React.useState(0);
	function add(){
		setCount(prevCount => prevCount + 1);
	};
	function subtract(){
		setCount(prevCount => prevCount -1);
	};
	return (
		<div>
			<button onClick={subtract}> - </button>
			<CountComponent number={count}/>
			<button onClick={add}> + </button>

		</div>
	)
	
}
export default CountProp;