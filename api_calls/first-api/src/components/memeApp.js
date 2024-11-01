// Using useEffect to fetch data from our api
import React from "react";

//start of the function to be exported and used in memePage
function Meme(){

    
    const [memeData, setAllMemeImages] = React.useState();
    
    React.useEffect(()=>{
        // console.log("Effect run") 
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>setAllMemeImages(data.data.memes))
    }, [])
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText: "",
        randomImage : "https://i.imgflip.com/30b1gx.jpg"
    });
    // console.log("All meme images ")
    // console.log(memeData);
    // console.log(`Length of allMemeImages is ${memeData.length}`);
    function getMemeImage(){
        const memesArray = memeData;
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
    function handleChange(event)
    {
        const {name, value} =  event.target
        setMeme((prevMeme)=>{
            return {
                ...prevMeme,
                [name] : value
            }
        })
    };

    return(
        <section className="home">
            <form>
                <div className="seperator">
                    <input type="text" name="topText" value={meme.topText} onChange={handleChange} placeholder="Enter title.."/>
                    <input type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} placeholder="Enter title.."/>
                </div>
            </form>
            <button onClick={getMemeImage}>Get new meme image</button>
            <div className="imageHolder">
                <img src={meme.randomImage}  className="memeImg" alt="meme"/>
                <p className="text top">{meme.topText}</p>
                <p className="text bottom">{meme.bottomText}</p>
                {/* in the above statement meme is an object and random image is a property */}
            </div>
        </section>
    )
}
export default Meme;