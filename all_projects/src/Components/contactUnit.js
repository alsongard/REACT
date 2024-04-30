import {FaPhoneAlt} from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi";
import "../CSS/contact.css";
function ContactUnit(props){
    // console.log(props);
    return(
        <section className="contact">
            <div className="contact-container">
                <img src={props.img} alt="user"/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <a href="https://"><FaPhoneAlt/></a>
                    <p>{props.tel}</p>
                </div>
                <div className="info-group">
                    <a href="https://"><BiLogoGmail/></a>  
                    <p>{props.email}</p>
                </div>
            </div>
        </section>
    )
}
export default ContactUnit;