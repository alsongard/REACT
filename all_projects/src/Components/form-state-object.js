// event.target = displays the DOM element =  <input type="text" onChange={handleChange} name="fname" placeholder="Enter firstname..."/>
// event.target.name = displays the name property of the target element
// event.target.value = gets the user data entered into the input element
import React from "react";
import "../CSS/form.css";
function FormStateObjectComponent()
{
    const [formData, setFormData] = React.useState(
        {
            fname : "",
            lname : "",
            email : "",
            comment : "",
            isEmployed : false,
            marriedStatus: "",
            favColor: ""
        }
    );
    function handleChange(event)
    {
        //destructure and best practises
        let {name, value, type, checked} = event.target

        setFormData((prevFormData)=>{
            return {
                ...prevFormData, 
            [name] : type === "checkbox" ? checked : value
            }
        })
        
    };
    // function handleChange(event)
    // {
    //     setFormData((prevFormData)=>{
    //         return {
    //             ...prevFormData, 
    //             [event.target.name] : event.target.value
    //         }
    //     })
        
    // };
    function handleSubmit(event)
    {
        // event.preventDefault();
        console.log(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="fname" value={formData.fname} placeholder="Enter firstname..."/>
            <input type="text" onChange={handleChange} name="lname"  value={formData.lname} placeholder="Enter lastname..."/>
            <input type="email" onChange={handleChange} name="email" value={formData.email} placeholder="Enter email..."/>
            <textarea type="text" onChange={handleChange} name="comment" value={formData.comment} placeholder="Enter comment..."/>
            <fieldset>
                <legend>Marriage Status</legend>
                <label> <input type="radio" name="marriedStatus" value="single" onChange={handleChange}/> Single </label>
                <label> <input type="radio" name="marriedStatus" value="married" onChange={handleChange}/> Married </label>
                <label> <input type="radio" name="marriedStatus" value="widowed" onChange={handleChange}/> Widowed </label>
            </fieldset>
            <div className="checkbox-container">
                <input id="status" type="checkbox" name="isEmployed" onChange={handleChange} checked={formData.isEmployed}/> 
                <label htmlFor="status">Employed</label>
            </div>
            <label>Choose favorite color: </label>
            <select name="favColor" onChange={handleChange} >
                <option value="">--Choose--</option>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
            </select>

        </form>
    )
}
export default FormStateObjectComponent;
/*
value={fname}
value={lname} 
 value={email}
*/