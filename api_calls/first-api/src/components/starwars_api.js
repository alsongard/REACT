import React from "react";
function StarWarsApi()
{
    const [starWarsData, setStarWarsData] = React.useState({}); 
    const [planet, setPlanet]  = React.useState(0);

    console.log("Component Rendered");
    React.useEffect(()=>{
        fetch("https://swapi.dev/api/people/1/")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
        // .then(data => console.log(data))
    },[planet]);
    
    function newPlanet()
    {
        setPlanet((prevValue)=>{return prevValue + 1})
    }

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <p>Planet number is {planet} </p>
            <button onClick={newPlanet}>New Planet</button>
        </div>
    )
}
export default StarWarsApi;