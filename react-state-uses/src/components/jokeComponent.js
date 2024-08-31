//change mesage of button
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
        });

    };
    return(
        <div className="jokes">
            <p>{props.setup}</p>
            {/* <p style={styles}>{props.punchline}</p> */}
            {isShown && <p>{props.punchline}</p>}
            {/* <button onClick={toggle}>show punchline</button> */}
            {/* used ampersand to check value*/}
            {/* {isShown && <button onClick={toggle}>hide punchline</button>} */}
            {/* {!isShown && <button onClick={toggle}>show punchline</button>} */}
            {/** using tenary operation*/}
            <button onClick={toggle}>{isShown ? "hide" : "show" } punchline</button>
            
            <hr/>
        </div>
    )
}
export default JokeComponent;