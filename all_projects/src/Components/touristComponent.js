import "../CSS/tourist.css";

function TouristComponent(prop){
    return (
        <section className="touristInfo">
            <div className="imageHolder">
                <img src={prop.items.imageUrl} alt={prop.items.altImg}/>
            </div>
            <div className="location-Data">
                <p>{prop.items.locationName}</p>
                <h2>{prop.items.title}</h2>
                <div className="dates">
                    <p>{prop.items.startDate}</p>
                    <p>{prop.items.endDate}</p>
                </div>
                <p>{prop.items.description}</p>
            </div>    
        </section>
    )
}

export default TouristComponent;