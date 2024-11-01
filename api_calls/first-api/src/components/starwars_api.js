import React from "react";
function StarWarsApi()
{
    const [starWarsData, setStarWarsData] = React.useState({}); 
    const [user, setUser]  = React.useState(0);

    console.log("Component Rendered");
    React.useEffect(()=>{
        console.log("Effect run");
        fetch(`https://swapi.dev/api/people/${user}/`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, [user]);
    
    function newUser()
    {
        setUser((prevValue)=>{return prevValue + 1})
    }
    console.log("Trying to see type of data:");
    return (
        <div>
            <button onClick={newUser}>Get New Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <p>{starWarsData.name}</p>
        </div>
    )
}
export default StarWarsApi;