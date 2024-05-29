//working with objects in state rather than values given to React.userState(0)
// import "fa-thin fa-user" from "react-icons/fa";
import React from "react";
import { CiStar } from "react-icons/ci";
import user_icon from "../images/user_image_6.png";
import "../CSS/stateObjects.css";
function ToggleFavorite(){
    const [profile, setProfile] = React.useState({
        firstName : "John",
        secondName : "Doe",
        phoneNumber : "+1 (719) 555-1212",
        email : "johndoe@gmail.com",
        isFavorite: false
    })


    return (
        <section className="home">
            <div className="profile">
                <img src={user_icon} alt="user"/>
                <div className="profile-container">
                    <CiStar/>
                    <h4>{profile.firstName} {profile.secondName}</h4>
                    <p>{profile.phoneNumber}</p>
                    <p>{profile.email}</p>
                </div>
            </div>
        </section>
    )
}
export default ToggleFavorite;
