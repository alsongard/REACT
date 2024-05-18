import "../CSS/tourist.css";
import logo from "../images/tourist.jpeg";
function HeaderInfo(){
    return(
        <header className="header">
            <div className="logo">
                <img  src={logo} alt="tourist logo"/>
            </div>
            <ul className="nav-bar">
                <li><a href="https://">Home</a></li>
                <li><a href="https://">About</a></li>
                <li><a href="https://">Contact</a></li>
            </ul>
        </header>
    )
}
function Home(){
    return(
        <section classNam="home">
                
        </section>
    )
}

function TouristPage(){
    return(
        <div>
            <HeaderInfo/>
            <Home/>
        </div>
    )
}
export default TouristPage;