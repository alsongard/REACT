import React  from "react";
import ReactDOM from "react-dom";
import "./style.css";
import logo from "./logo192.png";
function HeaderInfo(){
    return(
        <header className="header">
            <div className="logoContainer">
                <img className="logo" src={logo} atl="logo"/>
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course-Project 1</h4>
        </header>
    )
}
function Reasons(){
    return (
        <section className="home">
            <h3>Reasons 2 Study React</h3>
            <ol className="reasonsList">
                <li>Create Better and Interactive Websites</li>
                <li>Extend my Knowledge in Full Stack Development</li>
                <li>Build up my Career Level</li>
            </ol>
        </section>
    )
}
function Facts(){
    return (
        <section>
            <div>
                <h1>Fun Facts about React</h1>
                <ul>
                    <li><span>Was first released in 2013</span></li>
                    <li><span>Was originalyy created by Jordan Walke</span></li>
                    <li><span>Has well over 100k start on GitHub</span></li>
                    <li><span>Is maintained by Facebook</span></li>
                    <li><span>Powers thousands of enterprise apps, including mobile apps</span></li>
                </ul>
            </div>
        </section>
    )
}
function Page(){
    return (
        <div>
        <HeaderInfo/>
        <Facts/>
        </div>
    )
} 
ReactDOM.render(<Page/>, document.getElementById("root"))
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"))