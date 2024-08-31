// passed props.on value to React.useState() in order to chang it's value
import React from "react";
function BoxComponent(props)
{
    // console.log(props.boxId);
    // console.log(props.boxBool);
    // const [onValue, setOnValue] = React.useState(props.on); //derived state
    /*function changeValue()
    {f
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
    }*/
    const styles = 
    {
        backgroundColor: props.on ?  "#222222" : "transparent"
    };
    
    return (
        <div style={styles} className="box"onClick={()=>props.toggle(props.boxId)} >
        </div>
    )
}
export default BoxComponent;