import React from "react";
import WindowTrack from "./windowTracker";


function WindowPage()
{
    const [show, setShow] = React.useState(true);
    function changeBool()
    {
        setShow((prevValue)=>{
            return !prevValue;
        })
    }
    const styles = {
        display: show ?  "block": "none"
    }
    return (
        <div>
            <button onClick={changeBool}>
                Toggle WindowTracker
            </button>
            {show && <WindowTrack/>}
            {/* <WindowTrack style={styles}/> */}
            {/* OR
                {show && <WindowTrack/>} uses of ampersand
            */}
        </div>
    )
}
export default WindowPage;