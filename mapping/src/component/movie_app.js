import movie_data from "./movie_data";
import MovieComponent from "./movie_component";
import { FaSearch } from "react-icons/fa";
import "../css/movie.css";
// function MovieApp(){
//     const movieElements = movie_data.map(function(data_item){
//         return <MovieComponent key={data_item.id} items={data_item}/>
//     })
//     return {movieElements}
// }


// export default MovieApp;

function Header()
{
    return (
        <header>
            <h1 id="title">Movies</h1>
            <ul className="nav-bar">
                <li> <a href="#">Home</a></li>
                <li> <a href="#">Genres</a></li>
                <li> <a href="#">Country</a></li>
                <li> <a href="#">Movies</a></li>
                <li> <a href="#">Tv-series</a> </li>
            </ul>
            <form>
                <div className="searchbox">
                    {FaSearch}
                    <input type="search"  placeholder="Search"/>
                </div>
            </form>
        </header>
    )
}
function MovieApp()
{
    const movieElements = movie_data.map(function(dataItems){
        return <MovieComponent id={dataItems.id} items={dataItems}/>
    })
    return (
        <section className="home">
            <div className="movie-container">
                {movieElements}
            </div>
        </section>
    )
}
function Footer()
{
    return (
        <footer>
            <p>&copy; 2021 Movies</p>
        </footer>
    )
}
function MoviePage()
{
    return (
        <div>
            <Header/>
            <MovieApp/>
            <Footer/>
        </div>

    )
}
export default MoviePage;