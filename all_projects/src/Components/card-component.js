import { FaStar } from "react-icons/fa6";
import trainer from "../images/pexels-mikhail-nilov-6740056(1).jpg";
import gymrun from "../images/pexels-willpicturethis-1954524.jpg";
import "../CSS/airbnb.css";
function Card(prop){
    return (
        <section className="card-section">
            <div className="card-container">
                <div className="card-sub">
                    <img src={prop.mainimage} alt="trainer"/>
                    <div className="info-group">
                        <a href="https://"><FaStar/> {prop.rating}</a>
                        <p>{prop.country}</p>
                    </div>  
                </div>
                <div className="card-sub">
                    <img src={prop.mainimage1} alt="trainer"/>
                    <div className="info-group">
                        <a href="https://"><FaStar/> {prop.rating1}</a>
                        <p>{prop.country1}</p>
                    </div>  
                </div>
                <div className="card-sub">
                    <img src={prop.mainimage2} alt="trainer"/>
                    <div className="info-group">
                        <a href="https://"><FaStar/> {prop.rating2}</a>
                        <p>{prop.country2}</p>
                    </div>  
                </div>
                <div className="card-sub">
                    <img src={prop.mainimage3} alt="trainer"/>
                    <div className="info-group">
                        <a href="https://"><FaStar/> {prop.rating3}</a>
                        <p>{prop.country3}</p>
                    </div>  
                </div>
            </div>
            
        </section>
    )
}
export default Card