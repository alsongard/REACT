import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import "../css/react.css";
function Header()
{
    function toggleColor()
    {
        const styles = {
            backgroundColor: "black",
            color: "white"
        }
    }
    return (
        <header>
            <h1 className="logo">ReactFacts</h1>
            <div className="themes-container">
                <CiDark onClick={toggleColor}/>
                <CiLight/>
            </div>
        </header>
    )
}
function Body()
{
    return (
        <section className="home">
            <h1>Fun facts about React</h1>
            <ul className="react-details">
                <li><p>Was first released in 2013</p></li>
                <li><p>Was originally created by Jordan Walke</p></li>
                <li><p>Has well over 100k start on GitHub</p></li>
                <li><p>Is maintained by Face
                    ool</p></li>
                <li><p>Powers thousands of enterprise apps, including mobile apps</p></li>
            </ul>
        </section>
    )
}
function Page()
{  
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
};
export default Page;