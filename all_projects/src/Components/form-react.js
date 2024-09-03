import React from "react";
function FormComponent()
{
    const [userInput, setUserInput] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    function handleChange(event)
    {
        // console.log(event);
        // console.log("change");
        // setUserInput((userInput)=>{
        //     userInput = event.target.value;
        //     return userInput;
        // });
        setUserInput(event.target.value)
    };
    function secondChange(event)
    {
        setLastName(event.target.value)
    };
    return (
        <div>
            <form>
                <input type="text" onChange={handleChange} placeholder="First name.."/>
                <input type="text" onChange={secondChange} placeholder="Last name.."/>

                <p>{userInput} {lastName}</p>
            </form>
        </div>
    )
};
export default FormComponent;