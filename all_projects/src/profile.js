import userImage from "./swordGun.jpg";
import "./profile.css";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Home(){
    return(
        <section className="home">
            <div className="container">
                <img className="user-img" src={userImage} alt="user"/>
                <h1>Gard Alson</h1>
                <p>Full Stack Developer</p>
                <div className="socialIcons">
                    <label><a href="https://"><FaXTwitter/> Twitter  </a></label>
                    <label><a href="https://"><FaGithub/> Github </a></label>
                </div>
            </div>
        </section>
    )
}
function About(){
    return(
        <section className="about">
            <h2>About</h2>
            <p>Lorem Ispum Lorem Ispum Lorem Ispum Lorem</p>
        </section>
    )
}
function Interest(){
    return(
        <section className="interest">
            <h2>Interests</h2>
            <p>I am interested in Software Development, Web Development both back-end and front-end, Cyber Security, Data Science , Android Development and Networking.</p>
        </section>
    )
}

function Page(){
    return(
        <div>
            <Home/>
            <About/>
            <Interest/>
        </div>

    )
}
export default Page;