import { useState } from 'react'
import { searchMovies } from '../services/Movies'
import { useRef } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'

export const useMovies = ({ sort }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setError] = useState(null)
    const previousSearch = useRef('')

    const getMovies = useCallback(async ({ search }) => {
        if (previousSearch.current === search) return
        try {
            previousSearch.current = search
            setLoading(true)
            const newMovies = await searchMovies({ search })

            setMovies(newMovies)
            setError(null)

        } catch (e) {
            setError(e.message)

        } finally {
            setLoading(false)
        }
    },[])

    const sortedMovies = useMemo(() => {
        return (
            sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
            )
    },[sort,movies])

    return ({ movies: sortedMovies, loading, getMovies })
}
