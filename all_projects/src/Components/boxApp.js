// in this document the prop value is given as a dataItem from the map function which iterates over the box.js file
import React from "react";
import boxes from "./box.js";
import "../CSS/box.css";
import BoxComponent from "./boxComponent.js";
function BoxApp(props)
{
    const [boxValues, setBox] = React.useState(boxes);
    // if (props.darkMode == true)
    // {
    //     const styles = {backgroundColor: "black"};
    // }
    
    //tenary representation
    // const styles = { 
    //     backgroundColor: props.on ? "black" : "gray"
    // };

    function toggle(id)
    {
        console.log(`Id of box is ${id}`);
        setBox((prevBox)=>{
            const newSquares = [];
            for (let i = 0; i < prevBox.length ; i++)
            {
                const currentSquare = prevBox[i];
                if (currentSquare.id === id)
                {
                    const updateSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updateSquare);
                }
                else
                {
                    newSquares.push(currentSquare);
                }
            }
            return newSquares;
        })
    };
    const boxElements = boxValues.map((dataItems)=>{
        return (<BoxComponent key={dataItems.id} boxBool={dataItems.on} on={dataItems.on} boxId={dataItems.id} toggle={toggle}/>)
    })
    // let isBool = boxValues.on === true ? "blue" : "none";
    return (
        <div>
            <h1>Boxes will go here</h1>
            {boxElements}
        </div>
    )
}
export default BoxApp;