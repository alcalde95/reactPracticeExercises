const ListOfMovies = ({ movies }) => {
    return (

        <ul className='movies'>

            {
                movies.map(movie => (
                    <li key={movie.id} className='movie'>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster}></img>
                    </li>
                ))
            }

        </ul>
    )
}

const NoMovies = () => {
    return (
        <p>No movies :D</p>
    )
}

export const Movies = ({ movies }) => {
    const hasMovies = movies?.length > 0
    return (
        hasMovies ?
            <ListOfMovies movies={movies} />
            : <NoMovies />
    )
}
