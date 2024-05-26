import React from "react";

/*
    Challenge 1 :
    initialize a state for isGoingOut as a boolean
    clicking div state changes the value
    boolen value (true -> Yes , false -> No)
    */
function Challenges(){
    const [isGoingOut, setAnswer] = React.useState(true);
    // console.log(isGoingOut);
    let newValue;
    function handleChangingState(isValue){
        if (isValue === true){
        newValue = "Yes";
        }
        else if(isValue === false){
        newValue = "No";
        }
        return newValue;
    }
    
    function changeMind(){
        setAnswer(handleChangingState(isGoingOut));
    }
    // function changeMind(){
    //     setAnswer(isGoingOut === true ? "Yes" : "No");
    // }
    // setAnswer(handleChangingState(isGoingOut));
   
    //let answer = isGoingOut === "true" ? "Yes" : "No";
    return (
        <div className="state" onClick={changeMind}>
            <h1 className="state-title">Do I feel like going out tonight?</h1>
            <div className="state-value">
                <h1>{newValue}</h1>
            </div>
        </div>
    )
}
export default Challenges;