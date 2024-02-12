// ReactDOM.render(<h1>Hello Everyone!</h1>, document.getElementById("root"))
ReactDOM.render(
    <ul><li>Gard Alson</li><li>Age is 23</li></ul>,
    document.getElementById("root"))//was working place comma @right placef
// listOfElements.foreach(el => ReactDOM.render(<ul><li>Gard</li><li>Alson</li></ul>, document.getElementById("root"))) not work
let people = [
    "Gard Alson Safari",
    "Living  in Nairobi"
];/*declared variable containing list of items */
//declared another variable listItems
// //used the map() attribure for the array people which seems to iterate throught the list
// const listItems = people.map(person => <li>{person}</li>);
// ReactDOM.render(listItems, document.getElementById("root")); 