import {FaPhoneAlt} from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi";
import "../CSS/contact.css";
function Contact(){
    return(
        <section className="contact">
            <div className="contact-container">
                <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg" alt="user1"/>
                <h3>John Doe</h3>
                <div className="info-group">
                    <a href="https://"><FaPhoneAlt/></a>
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <a href="https://"><BiLogoGmail/></a>  
                    <p>Mr.Whiskey</p>
                </div>
            </div>
            <div className="contact-container">
                <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg" alt="user1"/>
                <h3>John Doe</h3>
                <div className="info-group">
                    <a href="https://"><FaPhoneAlt/></a>
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <a href="https://"><BiLogoGmail/></a>  
                    <p>Mr.Walter</p>
                </div>
            </div>
            <div className="contact-container">
                <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg" alt="user1"/>
                <h3>John Doe</h3>
                <div className="info-group">
                    <a href="https://"><FaPhoneAlt/></a>
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <a href="https://"><BiLogoGmail/></a>  
                    <p>Mr.Alfred</p>
                </div>
            </div>
            <div className="contact-container">
                <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg" alt="user1"/>
                <h3>John Doe</h3>
                <div className="info-group">
                    <a href="https://"><FaPhoneAlt/></a>
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <a href="https://"><BiLogoGmail/></a>  
                    <p>Mr.Bruce Wayne</p>
                </div>
            </div>

        </section>
        
           )
}
export default Contact;