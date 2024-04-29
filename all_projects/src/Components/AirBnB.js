import logo from "../images/AirbnbLogo.jpg"
function NavBar(){
    return (
        <header>
            <img src={logo} className="logo" alt="AirBnB logo"/>
        </header>
    )
}
function Page(){
    return(
        <div>
            <NavBar/>
        </div>
    )
}
export default Page