// function isGoingOut()
// {
//     // const [isGoingOutVar, setIsGoingOutVar] = React.useState();
//     let isGoingOutVar = "Yes";
// }

// const [isGoingOutVar, setIsGoingOutVar] = React.useState("Yes");

// <p>Value of React.useState is {isGoingOutVar}</p>

function Page()
{
    const [isGoingOutVar, setIsGoingOutVar] = React.useState("Yes");
    function changeMind()
    {
        setIsGoingOutVar("No");
        // setIsGoingOutVar( ()=>{
        //     return "No";
        // });
    };
    return (
        <section>
            <div className="container">
                <button onClick={changeMind}>Click Me to Chang Mind</button>
                <p>Change state of Mind</p>
                <p>State  of Mind : {isGoingOutVar}</p>
            </div>
        </section>
    )
}
function SimpleText()
{
    return (<p>Simple Text</p>)
}


ReactDOM.render(<Page/>,document.getElementById("root"));
// ReactDOM.render(<App/>, document.getElementById("root"))


