import "../CSS/tourist.css";

function TouristComponent(prop){
    return (
        <section className="touristInfo">
            <div class="imageHolder">
                <img src={prop.imageUrl} alt={prop.alt}/>
            </div>
            <div className="location-Data">
                <p>{prop.locationName}</p>
                <h2>{prop.title}</h2>
                <div className="dates">
                    <p>{prop.startDate}</p>
                    <p>{prop.endDate}</p>
                </div>
                <p>{prop.description}</p>
            </div>    
        </section>
    )
}

export default TouristComponent;