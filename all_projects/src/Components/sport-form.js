//on every text, selct input and textarea add in value={object.propertyName}

import React from "react";

function SportFormComponent()
{
    const [sportData, setSportData] = React.useState(
        {
            sportName : "",
            fullName : "",
            age: "",
            schoolName: "",
            gender: "",
            isEmployed: false,
            recommend: ""
        }
    )
    function handleChange(event)
    {
        //destructuring
        const {name, value, type, checked}= event.target;
        setSportData((prevSportData)=>{
            return {
                ...prevSportData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }
    // console.log(sportData);
    function handleSubmit(event)
    {
        event.preventDefault();
        console.log(sportData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Sports Submission form</h2>
            <label>Select sports name : </label>
            <select name="sportName" onChange={handleChange} >
                <option value="">Choose</option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="tennis">tennis</option>
                <option value="Rugby">Rugby</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Cricket">Cricket</option>
            </select>
            <label>Enter studets name</label>
            <input onChange={handleChange} name="fullName" value={sportData.fullName}type="text"/>
            <label>Enter students age</label>
            <input name="age" type="number" value={sportData.age} onChange={handleChange} />
            <label>Enter schoole name</label>
            <input name="schoolName" type="text" value={sportData.schoolName} onChange={handleChange}  />
            <fieldset>
                <legend>Gender</legend>

                <label>Male<input type="radio" name="gender" checked={sportData.gender === "male"} onChange={handleChange} value="male"/></label>
                <label>Female<input type="radio" name="gender" checked={sportData.gender === "female"} onChange={handleChange} value="female"/></label>
            </fieldset>
            <label><input type="checkbox" name="isEmployed" checked={sportData.isEmployed} onChange={handleChange}/>Employed</label>
            <textarea name="recommend"  placeholder="Any recommendations"onChange={handleChange} value={sportData.recommend}/>
            <button>Submit</button>
        </form>
    )
}
export default SportFormComponent;

/*
checkbox are used to allow a user to enter select more than 1 option
                <legend>Choose Race</legend>       
                <label><input type="checkbox" onChange={handleChange} name="raceName"  checked={sportData.raceName}/>African</label>
                <label><input type="checkbox" onChange={handleChange} name="raceName" checked={sportData.raceName}/>American African</label>
                <label><input type="checkbox" onChange={handleChange} name="raceName" checked={sportData.raceName}/>Arabian</label>
                <label><input type="checkbox" onChange={handleChange} name="raceName" checked={sportData.raceName}/>Asian</label>
*/