import jokes from "./jokes";
import JokeComponent from "./jokeComponent";
import "../css/joke.css";
function JokeApp(){


    const jokeElements =  jokes.map((dataItems)=>{
        return <JokeComponent setup={dataItems.setup} punchline={dataItems.punchline}/>
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
export default JokeApp;
