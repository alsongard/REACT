import logo from "../images/AirbnbLogo.jpg";
import bnbImages from "../images/AirBnB.png";
import "../CSS/airbnb.css";
import Card from "./card-component";
//import trainer from "../images/pexels-mikhail-nilov-6740056(1).jpg";
// import { FaStr } from "react-icons/fa6";
// import gymrun from "../images/pexels-willpicturethis-1954524.jpg";
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
            <Hero/> {/*main section */}
            <Card 
                mainimage="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"
                mainimage1="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg"
                mainimage2="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg"
                mainimage3="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg"
                image="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg"
                rating={4.9}
                rating1={4.8}
                rating2={4.7}
                rating3={4.6}
                country="United States"
                country1="Canada"
                country2="Russia"
                country3="China"
            />
        </div>
    )
}
export default Page