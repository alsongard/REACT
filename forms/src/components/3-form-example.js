// handling mutliple data inputs using objects.
import React from "react";
export default function Form3(){
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            secondName: ""
        }
    );
    function handleChange(event){
        setFormData((prevFormData)=>{
            return {...prevFormData,
            [event.target.name] : event.target.value}
        })
    }
    console.log(formData);
    return (
        <div>
            <form>
                <input type="text" onChange={handleChange}  name="firstName"/>
                <input type="text" onChange={handleChange} name="secondName"/>
            </form>
        </div>
    )
}