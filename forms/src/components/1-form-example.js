import React from "react";
function Form(){
    const [userName, setUserName] = React.useState("");

    //update the userName


    function handleChange(event){
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        // setUserName(event.target.value);
        setUserName(()=>{
            const newUserName = event.target.value;
            return newUserName;
        })
    };
    console.log(`The username has been updated to : ${userName}`)
    return(
        <div>
            <form>
                <label>Enter name:</label>
                <input type="text" onChange={handleChange}/>
            </form>
        </div>
    )
};

export default Form;