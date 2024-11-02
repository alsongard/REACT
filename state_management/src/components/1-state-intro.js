import React from "react";


function ListNames(){
    const [listNames , setListNames] = React.useState(["Jack", "Chucky", "Liena"]);
    const nameElements = listNames.map((dataItem)=>{
        return (
            <ul>
                <li>{dataItem}</li>
            </ul>
        )
    });

    return (
        <div>
            <p>Hello World</p>
            {nameElements}
        </div>
    )
}

function Introduction2State(){
    const [count, setCount] = React.useState(10);
    const [names, setNames] = React.useState("");
    
    // render the list Names
    function addNumber(){
        setCount(count + 1);
    };
    function handleChange(event){
        console.log(event.target.value);
    };

    return (
        <div className="bg-slate-400">
            <p  onClick={addNumber}  >Count = {count} </p>
            <input type="text" onChange={handleChange} name={names} value={names}/>
        </div>
    )
}

function AllApps()
{
    return (
        <>
            <Introduction2State/>
            <ListNames/>
        </>
    )
}
export default AllApps;