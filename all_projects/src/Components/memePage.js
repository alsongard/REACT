
import "../CSS/meme.css";
import Meme from "./memeApp";
function HeaderInfo(){
    return(
        <header>
            <p className="logo">Meme Generator</p>
            <div className="course">
                <h5>React Course - Project 3</h5>
            </div>
        </header>
    )
}
function MemePage(){
    return(
        <div>
            <HeaderInfo/>
            <Meme/>
        </div>
    )
}
export default MemePage;