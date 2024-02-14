/* challenge1: list of reasons for learning react*/
function HeaderInfo(){
    return(
        <div>
            <img src="../images/reactLogo.png" width="40px"/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
};
function Reasons(){
    return(
        <div>
            <h3>Reasons 2 study React</h3>
            <ol>
                <li>To increase my Knowledge on Programming</li>
                <li>To develop Projects</li>
                <li>Intergrate React with my Websites</li>
                <li>To acquire skills for future</li>
                <li>Keep up with trending Technologies</li>
            </ol>
        </div>
    )
};
function FooterInfo(){
    return (<p>@ 2024 Safari development. All rights reserved.</p>)
};
ReactDOM.render(
    <div>
        <HeaderInfo/>,
        <Reasons/>,
        <FooterInfo/>
    </div>,
    document.querySelector(".root")
)
// ReactDOM.render(<h1>Programming</h1>, document.querySelector(".root"))
// ReactDOM.render(
//     <div>
//         <h1>Hello world</h1>
//         <p>Checking if working </p>
//     </div>,
//     document.querySelector(".root")
// );