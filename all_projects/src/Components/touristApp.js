import touristData from "./tourist-data";
import TouristComponent from "./touristComponent";

function TouristApp(){
    const touristElement = touristData.map(function(dataItems){
        return <TouristComponent key={dataItems.id} imageUrl={dataItems.imageUrl} altImage={dataItems.altImg} locationName={dataItems.location} title={dataItems.altImg} startDate={dataItems.startDat} endDate={dataItems.endDat} description={dataItems.description} />
    })
    return (
        <div>
            {touristElement}
        </div>
    )
}


export default TouristApp;
