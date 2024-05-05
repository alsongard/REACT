import "../CSS/joke.css";
function Joke(props){
    return(
        <div className="jokes">
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    )
}
export default Joke;