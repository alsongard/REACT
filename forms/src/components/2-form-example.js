import React from "react";
function Form2(){
    // a simpleer solution

    const [firstName , setFirstName] = React.useState("");
    const [secondName , setsecondName] = React.useState("");

    //update the userName

    function handleFirstChange(event){
        setFirstName(event.target.value)

    };
    function handleSecondChange(event){
        setsecondName(event.target.value);
    };
    console.log(firstName, secondName)
    return(
        <div>
            <form>
                <label>Enter first name:</label>
                <input type="text" onChange={handleFirstChange}/>
                <label>Enter Last name:</label>
                <input type="text" onChange={handleSecondChange}/>
            </form>
        </div>
    )
};

export default Form2;