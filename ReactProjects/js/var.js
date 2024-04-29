function Hello(){
    const firstName = 'Gard';
    const secondName = "Alson";
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    let timeOfDay;
    if (hour < 12){
        timeOfDay = "Good Morning";
    }
    else if (hour >= 12 && hour <= 17){
        timeOfDay = "Good Afternoon";
    }
    else{
        timeOfDay = "Good Night";
    }
    return (
        <section>
            <h1>Hello {firstName} {secondName}  {timeOfDay} </h1>
            <p>The time is {date.getHours()}:{minutes}</p>
        </section>
    )
}
function Page(){
    return (
        <section>
            <Hello/>
        </section>
    )
}
ReactDOM.render(<Hello/>, document.getElementById('root'));