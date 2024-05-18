import "../CSS/tourist.css";
import logo from "../images/tourist.jpeg";
import TouristComponent from "./touristComponent";
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

function TouristPage(){
    return(
        <div>
            <HeaderInfo/>
            <TouristComponent
                imageUrl="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600"
                locationName= "Japan"
                title="Mountain Fuji"
                googleMapsUrl="https..."
                startDate= "12 Jan, 2021"
                endDate="24 Jan, 2021"
                description="Mount Fuji is the single most popular tourist site in Japan, for both Japanase and foreign tourists."
            />
            <TouristComponent
                imageUrl="https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                locationName="United Arab Emirates"
                title="Dubai"
                googleMapsUrl=""
                startDate="13 Dec, 2022"
                endDate="29 Dec, 2022"
                description="Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene."
            />
            <TouristComponent
                imageUrl="https://images.pexels.com/photos/342113/pexels-photo-342113.jpeg?auto=compress&cs=tinysrgb&w=600"
                locationName="Paris"
                title="Ifel Tower"
                googleMapsUrl=""
                startDate="16 Aug 2023"
                endDate="27 Sep, 2023"
                description="he Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France."
            />
            <TouristComponent
                imageUrl="https://images.pexels.com/photos/887848/pexels-photo-887848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                locationName=""
                title="Statue of LIberty"
                googleMapsUrl=""
                startDate="1 Jan, 2024"
                endDate="14 Jan, 2024"
                description="The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City."
            />
        </div>
    )
}
export default TouristPage;