//import react from "react-dom"
export default function HeaderInfo(){
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