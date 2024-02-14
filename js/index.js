// ReactDOM.render(<h1>Hello Everyone!</h1>, document.getElementById("root"))
// ReactDOM.render(
//     <ul><li>Gard Alson</li><li>Age is 23</li></ul>,
//     document.getElementById("root"));
    //was working place comma @right place
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

// let header = document.querySelector(".header");
// header.innerText = "2 Ocean in between us:";
function Day1(){
    return(
        <div>
            <h1>Welcome 2 React FreeCodeCamp Course</h1>
            <p>Self placed and interesting Course</p>
        </div>
    )
};
function Day2(){
    return (
        <div>
            <h1>Welcome to day 2 of react.</h1>
            <p>Need to achieve more and learn more and gain more. More and more of React</p>
        </div>
    )
};
function MainComponent(){
    return (
        <div>
            <h3>Getting to know more</h3>
            <ul><li>Name: Gard Alson</li><li>Age: 23</li></ul>
        </div>
    )
};
function Profile(){
    return <p>Happy Coding and All the Best</p>
};
let navElement = (
    <div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
);
let challengeAppend = (
    <div>
        <fieldset>
            <legend>Best Muxic</legend>
            <h1>Best Artist</h1>
            <p>Polo g</p>
            <p>Trevor Daniel</p>
        </fieldset>
    </div>
);

ReactDOM.render(
    <div>
        <Day1/>
        <Profile/>
        <MainComponent/>
        <Day2/>
    </div>,
    document.getElementById("root")
)
let element = <p className="paragraph1">Continue coding</p>
ReactDOM.render(challengeAppend, document.getElementById("music"))
ReactDOM.render(navElement, document.getElementById("nav"))

// ReactDOM.render(document.getElementById("practise").append(JSON.stringify(challengeAppend)))
// ReactDOM.render(element, document.getElementById("practise"));
//imperative example of vanillaJs
// const p = document.createElement("p");
// p.textContent = "This is an imperative way to program";
// p.className = "header";
// document.getElementById("root").append(p);
