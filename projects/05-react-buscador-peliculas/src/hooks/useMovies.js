import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'
import { useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search }) => {
    const [movies, setMovies] = useState([])

    

    const getMovies = () => {
        searchMovies({search}).then(data => setMovies(data))
    }


    return { movies, getMovies }
}