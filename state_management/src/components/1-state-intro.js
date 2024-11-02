import React from "react";


function ListNames(){
    const [listNames , setListNames] = React.useState(["Jack", "Chucky", "Liena"]);
    const [names, setNames] = React.useState("");

    
    console.log(`The value of names is ${names}`)
    
    function addName(){
        setListNames((prevList)=>{
            return [...prevList, names];
        });
    }
    
    function handleChange(event){
        console.log(event.target.value);
        setNames(event.target.value);
    };

    const nameElements = listNames.map((dataItem)=>{
        return (
            <ul className="list-disc ml-[20px]">
                <li>{dataItem}</li>
            </ul>
        )
    });


    return (
        <div>
            <div className="my-[20px]">
                <input type="text" onChange={handleChange}  value={names}/>
                <button className="ml-[15px] bg-sky-300"  onClick={addName}>Add Name</button>
            </div>
            {nameElements}
        </div>
    )
}

function Introduction2State(){
    const [count, setCount] = React.useState(10);
    
    // render the list Names
    function addNumber(){
        setCount(count + 1);
    };
   
    return (
        <div>
            <p  onClick={addNumber}  >Count = {count} </p>
        </div>
    )
}

function AllApps()
{
    return (
        <>
            <Introduction2State/>
            <div className="m-[50px]">
                <ListNames/>
            </div>
        </>
    )
}
export default AllApps;