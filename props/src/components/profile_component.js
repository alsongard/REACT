import { FaUserTie } from "react-icons/fa";
import male_img from "../images/male_image.jpg";;
function ProfileComponent(prop)
{
    return ( 
        <div className="user-container">
            <img  class="user_img" src={male_img} alt="user"/>
            <div className="user-details">
                <p>Name : {prop.name}</p>
                <p>Gender : {prop.gender}</p>
                <p>Age : {prop.age}</p>
                <p>Job : {prop.job}</p>
            </div>
            <p>Location :{prop.location}</p>
        </div>
    )
};
export default ProfileComponent;
