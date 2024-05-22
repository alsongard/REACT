import MemesData from "./memesData.js";
function Meme(){
    // function handler(){
    //     console.log("Welcome to Project Meme!")
    // }
    let url;
    function getMemeImage(){
        const memeArray = MemesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memeArray.length);
        url = memeArray[randomIndex].url;
        // console.log(url);
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
        </section>
    )
}
export default Meme;