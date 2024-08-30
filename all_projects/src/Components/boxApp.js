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
    //     backgroundColor: props.darkMode ? "black" : "gray"
    // };
    const boxElements = boxValues.map((dataItems)=>{
        return (<BoxComponent key={dataItems.id} on={dataItems.on}/>)
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