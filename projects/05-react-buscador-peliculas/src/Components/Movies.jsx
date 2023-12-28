const ListOfMovies = ({ movies }) => {
    return (
        <ul className="movies">
            {
                movies.map(movie => {
                    return (
                        <li key={movie.id} className="movie">
                            <h3>{movie.title}</h3>
                            <p>{movie.year}</p>
                            <img src={movie.poster}></img>
                        </li>
                    )
                }
                )
            }
        </ul>
    )
}


const NoMoviesResults = () => {
    return (
        <p>No se ha encontrado ninguna película </p>
    )
}

export const Movies = ({ movies }) => {
    const hasMovies = movies?.length > 0
    return (

        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />

    )
}