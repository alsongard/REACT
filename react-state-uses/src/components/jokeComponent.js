import React from "react";

function JokeComponent(props){
    const [isShown , setIsShown] = React.useState(false);
    // console.log(`The value of ishown is ${isShown}`);

    const styles =
    {
        display: isShown ? "block" : "none"
    };

    function toggle()
    {
        console.log(`The value of ishown is ${isShown}`); //shows the previousValue of isShown

        setIsShown((isShown)=>{
            const newValue = !isShown;
            return newValue;
        })
    };
    return(
        
        <div className="jokes">
            <p>{props.setup}</p>
            <p style={styles}>{props.punchline}</p>
            <button onClick={toggle}>show punchline</button>
            <hr/>
        </div>
    )
}
export default JokeComponent;