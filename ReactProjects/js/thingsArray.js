function ThingApp(){
	/*function changeValue(){
		setThings( (value)=>{
			value = value + 1;
			return value;
		})
	}*/
	/*
	let thingsList = ["thing_1", "thing_2"];
	const myElements = thingsList.map(createThingParagraph)
	*/
	const [things, setThings] = React.useState(["thing_1", "thing_2"]);
	function changeValue(){
		setThings((prevThings) => {
			const newThings = [...prevThings, `thing_${prevThings.length + 1}`]
			return newThings;
			/*let value = things.length;
			console.log(value);
			value += 1;
			things.push(`thing_${value}`);
			console.log(things);
			return things;*/
		})

	}
	function createThingParagraph(word){
		return (<h3 key={word}>{word}</h3>)
	}
	const thingItem = things.map(createThingParagraph)
	return(
		<div className="holder">
			{thingItem}
			<button onClick={changeValue}>Add Item</button>
		</div>
	)
}
ReactDOM.render(<ThingApp/>, document.getElementById("part1"));