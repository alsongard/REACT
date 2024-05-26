import React from "react";
import MemesData from "./memesData.js";

function Meme(){
    // function handler(){
    //     console.log("Welcome to Project Meme!")
    // }
    const[memeImage, setMemeImage] = React.useState("");
    function getMemeImage(){
        const memeArray = MemesData.data.memes;
        // console.log(memeArray);
        const randomIndex = Math.floor(Math.random() * memeArray.length);
        // console.log(randomIndex);
        setMemeImage(memeArray[randomIndex].url);
    }
    return(
        <section className="home">
            <form>
                <div className="seperator">
                    <input type="text" placeholder="Enter title.."/>
                    <input type="text" placeholder="Enter title.."/>
                </div>
            </form>
            <button onClick={getMemeImage}>Get new meme image</button>
            <div className="imageHolder">
                <img src={memeImage} className="memeImg" alt="meme"/>
            </div>
        </section>
    )
}
export default Meme;