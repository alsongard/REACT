function App(){
    function handle(){
        console.log("Hello it's me..")
    }
    function handleAlert(){
        alert("You clicked me to get an alert.")
    }
    function handleMouse(){
       console.log("Mouse Over")
            
    }
    return (
        <section>
            <div className="imageHolder">
                <img onMouseMove={handleMouse} className="user-img" src="https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto:compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-image"/>
                <button onClick={handle}>Click Me</button>
                <button onClick={handleAlert}>Get Alert</button>
            </div>
        </section>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"))