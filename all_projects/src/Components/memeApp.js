import React from "react";
import memesData from "./memesData.js";


//start of the function to be exported and used in memePage
function Meme(){
    // function handler(){
    //     console.log("Welcome to Project Meme!")
    // }
    /*function getMemeImage(){
        const memeArray = MemesData.data.memes;
        console.log(memeArray); 
        const randomIndex = Math.floor(Math.random() * memeArray.length);
        console.log(randomIndex);
        setMemeImage(memeArray[randomIndex].url);
    }*/
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText: "",
        randomImage : "https://i.imgflip.com/30b1gx.jpg"
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);
    const[memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes;
        const randomIndexNumber = Math.floor(Math.random() * memesArray.length);
        console.log(randomIndexNumber);
        const url = memesArray[randomIndexNumber].url;
        // console.log(url);
        setMeme((prevMeme)=>{ //prevMeme is the variable on the first react state **meme**
            return {
                ...prevMeme, 
                randomImage : url
            }
        } );
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
                <img src={meme.randomImage}  className="memeImg" alt="meme"/>
                {/* in the above statement meme is an object and random image is a property */}
            </div>
        </section>
    )
}
export default Meme;