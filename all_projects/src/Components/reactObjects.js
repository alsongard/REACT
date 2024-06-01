//working with objects in state rather than values given to React.userState(0)
// import "fa-thin fa-user" from "react-icons/fa";
import React from "react";
import { CiStar } from "react-icons/ci";
import user_icon from "../images/user_image_6.png";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "../CSS/stateObjects.css";
function ProfileUser(){
    const [profile, setProfile] = React.useState({
        firstName : "John",
        secondName : "Doe",
        phoneNumber : "+1 (719) 555-1212",
        email : "johndoe@gmail.com",
        isFavorite: false
    })
    //tenary operator condition ? "action == true" : "action == false"
    let StarIcon = profile.isFavorite === true ? <FaStar/> : <FaStarHalf/> ;
    console.log(StarIcon);
    function changeRating(){
        setProfile( (prevProfile)=> {
            return {...prevProfile,
                isFavorite :  !prevProfile.isFavorite
            }
        }  )
    }
    return (
        <section className="home">
            <div className="profile">
                <img src={user_icon} alt="user"/>
                <div className="profile-container">
                    <h4>{profile.firstName} {profile.secondName}</h4>
                    <div onClick={changeRating} >
                        {StarIcon}
                    </div>
                    <p>{profile.phoneNumber}</p>
                    <p>{profile.email}</p>
                </div>
            </div>
        </section>
    )
}
export default ProfileUser;
