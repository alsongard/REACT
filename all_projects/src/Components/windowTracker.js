import React from "react";

function WindowTrack(props)
{
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    // return(<h1 style={props.style}>Window width : {window.innerWidth}</h1>)
    React.useEffect(()=>{
        window.addEventListener("resize", ()=>{
            // console.log("resized");
            setWindowWidth(()=>{
                console.log("setting up...");
                return window.innerWidth;
            })

        })
        //clearning useEffect(memory leak)
        return function ()
        {
            console.log("Cleaning up...")
            window.removeEventListener("resize", ()=>{
                setWindowWidth(()=>{
                    return window.innerWidth;
                })
            })
        }
    }, [])
    return(<h1>Window width : {windowWidth}</h1>)
}

export default WindowTrack;