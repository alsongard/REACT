// using an object as state for storing form data 
// add email and age
import React from "react";
export default function Form4(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        secondName: "",
        userEmail: "",
        userAge:""
    });

    console.log(formData);
    function handleChange(event){
        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }
    return (
        <div>
            <form>
                <input placeholder="Enter first name" type="text" onChange={handleChange} name="firstName"/>
                <input placeholder="Enter second name" type="text" onChange={handleChange} name="secondName"/>
                <input placeholder="Enter email" type="email" onChange={handleChange} name="userEmail"/>
                <input placeholder="Enter age" type="number" onChange={handleChange} name="userAge"/>
            </form>
        </div>
    )
}