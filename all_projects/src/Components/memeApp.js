function Meme(){
    function handler(){
        console.log("Welcome to Project Meme!")
    }
    return(
        <section className="home">
            <form>
                <div className="seperator">
                    <input type="text" placeholder="Enter title.."/>
                    <input type="text" placeholder="Enter title.."/>
                </div>
                <button onClick={handler}>Get new meme image</button>
            </form>
        </section>
    )
}
export default Meme;