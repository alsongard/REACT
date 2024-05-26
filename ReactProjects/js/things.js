function  ThingApp(){
    const thingsArray = ["things_1", "things_2", "things_3", "things_4", "things_5"];
    // const thingsElements = thingsArray.map(thing => <p>{thing}</p>)
    function createThingParagraph(thing){
        return <p key={thing}>{thing}</p>
    }
    function addItem(){
        const newThingText = `Thing_${thingsArray.length + 1}`;
        thingsArray.push(newThingText);
        console.log(thingsArray);
    }
    function greet(name){
        const date = new Date();
        let hour = date.getHours();
        let timeOfDay;
        if (hour >= 4 && hour < 12){
            timeOfDay = "morning";
        }else if (hour >= 12 && hour < 17){
            timeOfDay = "afternoon";
        }else if (hour >= 17 && hour < 21){
            timeOfDay = "evening";
        }else{
            timeOfDay = "night";
        }
        return (`Good ${timeOfDay} ${name}`);
    }
    let result = React.useState("Yes");
    console.log(result);
    console.log(greet("Bob"));
    const thingsElements = thingsArray.map(createThingParagraph);
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
            <p>Is result given {result[0]}</p>{/** this returns elements of the React.useState in 0 : variableName, 1: functionName*/}
        </div>
    )
}

ReactDOM.render(<ThingApp/>, document.getElementById("root"));
/*
State : refers to values that are managed by the component, similar to variables declared inside a function. Any changed made
to these values will be reflected.
 */