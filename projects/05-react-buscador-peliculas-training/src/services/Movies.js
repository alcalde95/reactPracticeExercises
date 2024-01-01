
export const searchMovies = async ({ search }) => {
    if (search === '') return
    try {

        const results = await fetch(`http://www.omdbapi.com/?apikey=ff25fd00&s=${search}`)
        const json = await results.json()
        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

    } catch (error) {
        throw new Error('Error al ahcer el fetch de datos en Movies')
    }

}
