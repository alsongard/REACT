import { FaStar } from "react-icons/fa6";
import "../CSS/airbnb.css";

function NewCard(prop){
    return (
        <section className="card-section">
            <div className="card-sub">
                <img src={prop.mainimage} alt="trainer"/>
                <div className="info-group">
                    <a href="https://"><FaStar/> {prop.rating} ({prop.review})</a>
                    <p>{prop.country}</p>
                </div>  
                <p>{prop.message}</p>
                <div className="info-group">
                    <p>Available spots : {prop.spots}   Price : {prop.cost} $</p>
                </div>
            </div>
        </section>
    )
}

export default NewCard