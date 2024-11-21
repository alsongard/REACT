import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React  from "react";
import { MdDarkMode } from "react-icons/md";
import { IconContext } from "react-icons";


// header function not used 
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
            <div className="flex flex-row">

            <IconContext.Provider value={{ className: "night"  }}>
                <div>
                    <MdDarkMode />
                </div>
            </IconContext.Provider>
            </div>
        </header>
    )
}
//function above is not used

function Body()
{
    return (
        <section>
            <div className="mt-[50px] w-[90%] mx-auto">
                <h1 className="dark:text-white font-semibold text-3xl underline font-serif">Fun facts about React</h1>
                <ul className="dark:text-white list-disc ml-4">
                    <li><p className="dark:text-white">Was first released in 2013</p></li>
                    <li><p className="dark:text-white">Was originally created by Jordan Walke</p></li>
                    <li><p className="dark:text-white">Has well over 100k start on GitHub</p></li>
                    <li><p className="dark:text-white">Is maintained by Facebook</p></li>
                    <li><p className="dark:text-white">Powers thousands of enterprise apps, including mobile apps</p></li>
                </ul>
            </div>
            
        </section>
    )
}
function Page()
{  
    const [darkMode, setDarkMode] = React.useState(false)
    function toggleColor()
    {
        console.log("I am clicked");
        setDarkMode((prevValue)=>{
            let result = !prevValue;
            console.log(result);
            return result;
        })
        const styles = {
            backgroundColor: "black",
            color: "white"
        }
    }
    let answer = darkMode ? "dark" : ""
    console.log(answer);
    
    return (
        <div className={`${answer}`}>
            <div className="dark:bg-slate-900 h-[100vh] bg-[rgba(107,163,154,0.67)]">
                <header className="bg-[rgba(107,163,154,0.67)] flex flex-row justify-between px-[30px] py-[5px] dark:bg-slate-900" >
                <h1 className="dark:text-white">ReactFacts</h1>
                <div className="flex flex-row">

                <IconContext.Provider value={{ className: "night"  }}>
                    <div>
                        <MdDarkMode onClick={toggleColor} />
                    </div>
                </IconContext.Provider>
                </div>
                </header>
                <Body/>
            </div>
        </div>
    )
};
export default Page;