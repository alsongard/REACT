//import images
// import logo from "../images/reactLogo.png";
function HeaderInfo(){
    return(
        <header className="header">
            <div className="logoContainer">
                <img className="logo" src="../images/reactLogo.png" alt="logo"/>
            </div>
            <h3>ReactFacts</h3>
            <h4>React Course-Project 1</h4>

        </header>
    )
}
function Reasons(){
    return (
        <section className="home">
            <h1>Reasons 2 Study React</h1>
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
        <section className="facts">
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
ReactDOM.render(<HeaderInfo/>, document.getElementById("header"))
ReactDOM.render(<Reasons/>, document.getElementById("reasons"))
ReactDOM.render(<Facts/>, document.getElementById("facts"))