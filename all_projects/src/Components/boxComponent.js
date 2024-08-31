// passed props.on value to React.useState() in order to chang it's value
import React from "react";
function BoxComponent(props)
{
    const [onValue, setOnValue] = React.useState(props.on); //derived state
    function changeValue()
    {
        setOnValue((onValue)=>{
            if (onValue === false)
            {
                return true;
            }
            else if(onValue === true)
            {
                return false;
            }
        })
    }
    const style = 
    {
        backgroundColor: onValue ? "#222222" : "transparent"
    };
    return (
        <div style={style}  className="box" onClick={changeValue}>
        </div>
    )
}
export default BoxComponent;