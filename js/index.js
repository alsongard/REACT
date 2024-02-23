import React  from "react";
import ReactDOM from "react-dom";
import "./style.css";
import logo from "./logo192.png";
import myImage from "./Programmer.jpg";
function HeaderInfo(){
    return(
        <header className="header">
            <div className="logoContainer">
                <img className="logo" src={logo} alt="logo"/>
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
};
function Home(){
    return (
        <section>
            <img  src={myImage} className="myImage" alt="myImage"/>
            <h1>Gard Alson</h1>
            <p>Full Stack Developer</p>
            <a href="#" type="button">Linkedin</a>
            <a href="#" type="button">Twitter</a>
        </section>
    )

};
function About(){
    return(
        <section className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure vel, omnis beatae optio vitae, facilis aliquam explicabo voluptatem, dolore rerum laborum laudantium iste officiis sint ut quibusdam eveniet sit. </p>
        </section>
    )
};
function Interest(){
    return(
        <section className="interest">
            <h2>Interest</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure vel, omnis beatae optio vitae, facilis aliquam explicabo voluptatem, dolore rerum laborum laudantium iste officiis sint ut quibusdam eveniet sit.</p>
        </section>
    )
};
function DigitalPage(){
    return(
        <div>
            <Home/>
            <About/>
            <Interest/>
        </div>
    )
};
ReactDOM.render(<DigitalPage/>, document.getElementById("root"))
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"))