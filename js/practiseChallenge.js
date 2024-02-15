/* challenge1: list of reasons for learning react*/
function HeaderInfo(){
    return(
        <header>
            <img className="image-logo" src="../images/reactLogo.png"/>
            <ul className="nav-bar">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
};
function Reasons(){
    return(
        <section className="mainSection">
            <h1>Reasons 2 study React</h1>
            <ol className="reasons">
                <li>To increase my Knowledge on Programming</li>
                <li>To develop Projects</li>
                <li>Intergrate React with my Websites</li>
                <li>To acquire skills for future</li>
                <li>Keep up with trending Technologies</li>
            </ol>
        </section>
    )
};
function FooterInfo(){
    return (
    <div className="footerData">
        <p>@ 2024 Safari development. All rights reserved.</p>
    </div>)
};
// ReactDOM.render(
//     <div>
//         <HeaderInfo/>
//         <Reasons/>
//         <FooterInfo/>
//     </div>,
//     document.querySelector(".root")
// )
// ReactDOM.render(<h1>Programming</h1>, document.querySelector(".root"))
// ReactDOM.render(
//     <div>
//         <h1>Hello world</h1>
//         <p>Checking if working </p>
//     </div>,
//     document.querySelector(".root")
// );

// also you could render each of the function in another function 
function Page(){
    return (
        <div>
            <HeaderInfo/>
            <Reasons/>
        </div>

    )
}
ReactDOM.render(<Page/>, document.querySelector(".root"));
ReactDOM.render(<FooterInfo/>, document.querySelector("footer"))