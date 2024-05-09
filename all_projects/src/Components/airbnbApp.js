import airbnbData  from "./airbnbData";
import NewCard from "./new_card_component";

function AirbnbApp(){
    const cardElements = airbnbData.map(function(cardItem){
        return  <NewCard key={cardItem.id} slots={cardItem.openSpots} mainimage={cardItem.coverImage} rating={cardItem.stats.rating} country={cardItem.location} message={cardItem.description} cost={cardItem.price} spots={cardItem.openSpots} review={cardItem.stats.reviewCount}/>
    })
    return cardElements
}
export default AirbnbApp