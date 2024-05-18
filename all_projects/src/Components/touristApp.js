import touristData from "./tourist-data";
import TouristComponent from "./touristComponent";

function TouristApp(){
    const touristElement = touristData.map(function(dataItems){
        return <TouristComponent key={dataItems.id} items={dataItems}/>
    })
    return (
            touristElement

    )
}


export default TouristApp;
