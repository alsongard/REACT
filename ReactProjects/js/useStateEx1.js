function App(){
	const [myValue , setmyValue] = React.useState(0);
	function addValue(value){
		value = value + 1;
        return value;
	}
	function subValue(value){
		value = value - 1;
        return value;
	}
	function handleAdd(){
		setmyValue( myValue + 1);
	}
	function handleSub(){
		// setmyValue(myValue - 1);
        setmyValue(subValue(myValue));
	}
	return (
		<div>
			<button onClick={handleAdd}>+</button>
			<p>{myValue}</p>
			<button onClick={handleSub}>-</button>
		</div>
	)
}
ReactDOM.render(<App/>, document.getElementById("part1"));
