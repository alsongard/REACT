import React from "react";
import "../CSS/form-challenge.css";
function FormChallengeComponent()
{
    const [challengeFormData, setChallengeFormData] = React.useState(
        {
            fullname:"",
            password:"",
            confirmPassword: "",
            newsLetterStatus: false
        }
    );
    function handleChange(event)
    {
        const {name, value, checked, type} = event.target
        setChallengeFormData((prevChallengeFormData)=>{
            return {
                ...prevChallengeFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
    function handleSubmit(event)
    {
        event.preventDefault();
        if (challengeFormData.password === challengeFormData.confirmPassword)
        {
            console.log("Successfully signed up");
            
        }
        else
        {
            console.log("Error: Passwords do not match");
            return;
        };
        if (challengeFormData.newsLetterStatus)
            {
                console.log("Thankyou for signing up to our webpage");
            } 
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="fullname" onChange={handleChange} value={challengeFormData.fullname} placeholder="Enter name..."/>
            <input type="password" name="password" onChange={handleChange} value={challengeFormData.password} placeholder="Enter password.."/>
            <input type="password" name="confirmPassword"  onChange={handleChange} value={challengeFormData.confirmPassword} placeholder="Enter password.."/>
            <div className="checkbox">
                <input id="newsletter"  type="checkbox" name="newsLetterStatus" onChange={handleChange} checked={challengeFormData.newsLetterStatus}/>
                <label htmlFor="newsletter">I want to join the newsletter</label>
            </div>
            <button>Sign up</button>
        </form>
    )
};
export default FormChallengeComponent;