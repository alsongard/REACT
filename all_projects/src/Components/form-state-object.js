// event.target = displays the DOM element =  <input type="text" onChange={handleChange} name="fname" placeholder="Enter firstname..."/>
// event.target.name = displays the name property of the target element
// event.target.value = gets the user data entered into the input element
import React from "react";
function FormStateObjectComponent()
{
    const [formData, setFormData] = React.useState(
        {
            "fname" : "",
            "lname" : "",
            "email" : "",
            "comment" : ""
        }
    );
    function handleChange(event)
    {
        setFormData((prevFormData)=>{
            return {
                ...prevFormData, 
                [event.target.name] : event.target.value
            }
        })
        
    };
    console.log(formData);
    return (
        <form>
            <input type="text" onChange={handleChange} name="fname" value={formData.fname} placeholder="Enter firstname..."/>
            <input type="text" onChange={handleChange} name="lname"  value={formData.lname} placeholder="Enter lastname..."/>
            <input type="email" onChange={handleChange} name="email" value={formData.email} placeholder="Enter email..."/>
            <textarea type="text" onChange={handleChange} name="comment" value={formData.comment} />
        </form>
    )
}
export default FormStateObjectComponent;
/*
value={fname}
value={lname} 
 value={email}
*/