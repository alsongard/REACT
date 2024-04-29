import logo from "../images/AirbnbLogo.jpg"
import bnbImages from "../images/AirBnB.png"
import "../CSS/airbnb.css"
function NavBar(){
    return (
        <header>
            <img src={logo} className="logo" alt="AirBnB logo"/>
        </header>
    )
}
function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
                <img className="bnbStack" src={bnbImages} alt="airbnb images"/>
                <div className="hero-text">
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities lead by one-of-a-kind hosts-all without leaving home.</p>
                </div>
            </div>
        </section>
    )
}
function Page(){
    return(
        <div>
            <NavBar/>
            <Hero/>
        </div>
    )
}
export default Page