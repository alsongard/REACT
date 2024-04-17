function Home(){
    return(
        <section className="home">
            <div className="container">
                <img className="user-img" src="../images/swordGun.jpg" alt="user-image"/>
                <h1>Gard Alson</h1>
                <p>Full Stack Developer</p>
                <div className="socialIcons">
                    <a href="#">Twitter</a>
                    <a href="#">Github</a>
                </div>
            </div>
        </section>
    )
}
function About(){
    return(
        <section className="about">
            <h2>About</h2>
            <p>Lorem Ispum Lorem Ispum Lorem Ispum Lorem</p>
        </section>
    )
}
function Interest(){
    return(
        <section className="interest">
            <h2>Interests</h2>
            <p>I am interested in Software Development, Web Development both back-end and front-end, Cyber Security, Data Science , Android Development and Networking.</p>
        </section>
    )
}

function Page(){
    return(
        <div>
            <Home/>
            <About/>
            <Interest/>
        </div>

    )
}
ReactDOM.render(<Page/>, document.getElementById("root"))