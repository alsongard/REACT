import React from "react";

function ObserveDependency()
{
    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(0);

    console.log("Component rendered");
    React.useEffect(()=>{
        console.log("Use effect")
    }, [])
    function addNumber()
    {
        setCount((prevCount)=>{
            return prevCount + 1;
        })
    }
    return (
        <div>
            <p>Current value : {count}</p>
            <button onClick={addNumber}>Add</button>
        </div>
    )
}
export default  ObserveDependency;