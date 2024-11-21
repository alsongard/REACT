import React from "react";

function Practise()
{

    const [darkMode, setDarkMode] = React.useState(false);

    function toggleDarkMode(){
        setDarkMode((prevValue)=>{
            console.log("Just clicked ")
            return !prevValue;
        })
    }
    const myStyles = {
        backgroundColor: '#a19390',
        width:'300px',
        height: '300px',
        borderRadius: '25px',
        margin: '0 auto',
        padding:'10px',
        boxSizing: 'border-box'
    }
    let answer;
    if (!darkMode)
    {
        answer = "dark";
    }
    return (
        <section className={`${answer}`} >
            <main className="flex min-h-screen flex-col p-12 bg-neutral-100 dark:bg-neutral-900">
                <nav className="grid grid-cols-3 items-center">
                    <h1 className="text-xl font-semibold dark:text-white">
                        DesignConfrence
                    </h1>
                    <span className="justify-self-center text-blue-600 font-mono">
                        November 2024 | Mars, Andromida
                    </span>
                    <button className="justify-self-end p-4 bg-blue-600 text-white rounded-xl">
                        Get your Tickets
                    </button>
                </nav>

                <section className="w-[90%] max-w-3xl mx-auto mt-40 flex flex-col gap-8">
                    <h1 className="text-blue-600 text-7xl fonst-semibold">
                        A design confrence for the dark side.
                    </h1>
                    <p className="text-sky-800 text-2xl">
                        The next generation of web users ae tech-savvy and suspicious. They know how to use dev tools, they can detech a phishing scam form a mile away and they certainly aren't accepting any checks from Western Union.
                    </p>
                    <p className="text-sky-800  text-2xl tracking-wide ">
                        At DesignConfrence you'll learn about the latest dark patterns being developed to trick even the smartest visitors and  you'll learn how to deploy them without ever being detected. 
                    </p>
                </section>

            </main>
                <button onClick={toggleDarkMode} className="absolute bottom-0 font-semibold right-[100px] py-[10px] px-[5px]  bg-black text-white  rounded-[100%]">
                    {darkMode ? 'LHT' : 'DRK'}
                </button>
        </section>
        
    )
}

export default Practise;

/**
 * <div className={`${darkMode && "dark"}`} style={{backgroundColor:' #909ba1 ', height:'100vh'}}>
            <p style={{color: 'red'}}>Hello World</p>

            <div style={myStyles}>
                <p>I'm a container</p>
            </div>
            <p className="dark:bg-black dark:text-white p-[50px] bg-red-400 ">Hello world</p>
            <button onClick={toggle}>{darkMode ? "dark" : "light"}</button>
        </div>
 */