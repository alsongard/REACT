import { FaStar } from "react-icons/fa6";
import logo from "../images/AirbnbLogo.jpg";
import trainer from "../images/pexels-mikhail-nilov-6740056(1).jpg";
import gymrun from "../images/pexels-willpicturethis-1954524.jpg";
import bnbImages from "../images/AirBnB.png";
import "../CSS/airbnb.css";
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
function Card(){
    return (
        <section className="card-section">
            <div className="card-container">
                <div className="card-sub">
                    <img src={trainer} alt="trainer"/>
                    <div className="info-group">
                        <a href="https://">5.0(6)<FaStar/></a>
                        <p>U.S.A</p>
                    </div>  
                </div>
                <div className="card-sub">
                    <img src={gymrun} alt="trainer"/>
                    <div className="ifno-group">
                        <a href="https://">5.0(6)<FaStar/></a>
                        <p>Australia</p>
                    </div>
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
            <Card/>
        </div>
    )
}
export default Page