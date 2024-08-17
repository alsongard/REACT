import ProfileComponent from "./profile_component";
import "../css/profile_main_page.css";
function Header()
{
    return (
        <header >
            <h1>User Profiles</h1>
            <ul className="nav-bar">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            <button><a href="#">Get in Touch</a></button>
        </header>
    )
}
function Footer()
{
    return (
        <footer>
            <div className="footer-sub-container">
                <ul className="footer-navbar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </div>
            <div className="footer-sub-container">
                <h1>Follow Us</h1>
                <ul className="social-media">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
            <div className="footer-sub-container">
                <a href="#">Get in Touch</a>  
                <p>Phone: 1234567890</p>
                <p>Email: dfdsf@gmail.com</p>
                <p>Address: East Africa, Kenya</p>
            </div>
           
        </footer>
    )
}
function ProfilePage()
{
    return(
        <div>
            <Header/> 
            <section className="profile-section">
                <ProfileComponent
                    name="John Doe"
                    gender="M"
                    age="25"
                    job="Web Developer"
                    location="USA"
                />       
                <ProfileComponent
                    name='Jane Doe'
                    gender="F"
                    age="30"
                    job="Web Designer"
                    location= 'UK'
                />
                <ProfileComponent
                    name='Tom Doe'
                    gender="M"
                    age="35"
                    job='UI/UX Designer'
                    location='Canada'
                />
            </section>
            <Footer/>

        </div>
    )
};
export default ProfilePage