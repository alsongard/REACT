import jokesData  from "./jokesData";
import Joke from "./joke";
function JokeApp(){
    const jokeElements = jokesData.map(function(jokeItem){
        return <Joke setup={jokeItem.setup} punchline={jokeItem.punchline}/>
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
export default JokeApp;