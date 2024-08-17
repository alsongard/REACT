function MovieComponent(prop)
{
    return (
        <div className="movie-component">
            <img src={prop.items.image} alt={prop.items.name}/>
            <h2> <span className="inform">Name :</span> {prop.items.name}</h2>
            <p> <span className="inform">Description :</span> {prop.items.description}</p>
            <p> <span className="inform">Genre :</span> {prop.items.Genre}</p>
            <p> <span className="inform">Actor :</span> {prop.items.Actor}</p>
            <p> <span className="inform">Director: </span>{prop.items.Director}</p>
            <p> <span className="inform">Country : </span> {prop.items.Country}</p>
        </div>
    )
}
export default MovieComponent;