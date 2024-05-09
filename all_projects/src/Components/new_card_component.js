import { FaStar } from "react-icons/fa6";
import "../CSS/airbnb.css";

function NewCard(prop){
    let badgeCard ;
    if (prop.slots === 0){
        badgeCard = "SOLD OUT";
    }
    else if (prop.country === "Online"){
        badgeCard = "ONLINE";
    }
    return (
        <div className="card-sub">
            {badgeCard &&  <div className="slots"> <p>{badgeCard}</p></div>}
            <img src={prop.mainimage} alt="trainer"/>
            <div className="info-group">
                <a href="https://"><FaStar/> {prop.rating} ({prop.review})</a>
                <p>{prop.country}</p>
            </div>  
            <div className="info-group">
                <p>{prop.message}</p>
            </div>
            <div className="info-group">
                <div className="holder">
                    <p>Available spots</p>
                    <p> {prop.spots}</p>
                </div>
                <div className="holder">
                    <p>Price</p>
                    <p>{prop.cost} $</p>
                </div>
                
            </div>
        </div>
    )
}

export default NewCard
/*
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
*/