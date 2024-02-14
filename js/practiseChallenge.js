/* challenge1: list of reasons for learning react*/
function Reasons(){
    return(
        <div>
            <h3>Reasons 2 study React</h3>
            <ol>
                <li>To increase my Knowledge on Programming</li>
                <li>To develop Projects</li>
                <li>Intergrate React with my Websites</li>
                <li>To acquire skills for future</li>
                <li>Keep up with trending Technologies</li>
            </ol>
        </div>
    )
};

// ReactDOM.render(<h1>Programming</h1>, document.querySelector(".root"))
ReactDOM.render(<Reasons/>,document.querySelector(".root"))