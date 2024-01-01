import { useState, useRef, useMemo } from 'react'
import { searchMovies } from '../services/movies'
import { useCallback } from 'react'

export const useMovies = ({ search, sort }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)


    const getMovies = useCallback(
        async ({ search }) => {
            if (previousSearch.current === search) return
            try {
                setLoading(true)
                setError(null)
                previousSearch.current = search
                const newMovies = await searchMovies({ search })
                setMovies(newMovies)

            } catch (e) {
                setError(e.message)
            } finally {
                //tanto en e ltry como en el catch
                setLoading(false)
            }
        }, [])

    const sortedMovies = useMemo(() => {
        return (
            sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
                : movies
        )
    }, [sort, movies])

    return { movies: sortedMovies, loading, error, getMovies }
}