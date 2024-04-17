function HelloWorld(){
    return <p>Hello World</p>
}
function Home(){
    return(
        <div>
            <section>
                <h1>Welcome Back Gard</h1>
            </section>
        </div>

    )
}
ReactDOM.render(<HelloWorld/>, document.getElementById("practise"));
ReactDOM.render(<Home/>, document.getElementById("music"));