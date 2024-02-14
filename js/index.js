// ReactDOM.render(<h1>Hello Everyone!</h1>, document.getElementById("root"))
// ReactDOM.render(
//     <ul><li>Gard Alson</li><li>Age is 23</li></ul>,
//     document.getElementById("root"));
    //was working place comma @right placef
// listOfElements.foreach(el => ReactDOM.render(<ul><li>Gard</li><li>Alson</li></ul>, document.getElementById("root"))) not work
let people = [
    "Gard Alson Safari",
    "Living  in Nairobi"
];
/*declared variable containing list of items */
//declared another variable listItems
// //used the map() attribure for the array people which seems to iterate throught the list
// const listItems = people.map(person => <li>{person}</li>);
// ReactDOM.render(listItems, document.getElementById("root")); 

//these can be written in one line function MainComponent(){ return <h1>You there</h1>}

// ReactDOM.render(<p>Welcome to Session 2 of react</p>, document.getElementById("root"))
function Day1(){
    return(
        <div>
            <h1>Welcome 2 React FreeCodeCamp Course</h1>
            <p>Self placed and interesting Course</p>
        </div>
    )
}
function Day2(){
    return (
        <div>
            <h1>Welcome to day 2 of react.</h1>
            <p>Need to achieve more and learn more and gain more. More and more of React</p>
        </div>
    )
}
function MainComponent(){
    return (
        <div>
            <h3>Getting to know more</h3>
            <ul><li>Name: Gard Alson</li><li>Age: 23</li></ul>
        </div>
    )
}
function Profile(){
    return <p>Happy Coding and All the Best</p>
}
ReactDOM.render(
    <div>
        <Day1/>
        <Profile/>
        <MainComponent/>
        <Day2/>
    </div>,
    document.getElementById("root")
)