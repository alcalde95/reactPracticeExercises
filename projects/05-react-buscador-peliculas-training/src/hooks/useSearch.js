import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

export const useSearch = () => {

    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current && search != '') {
            isFirstInput.current = false

        }
        
        if (isFirstInput.current && search === '') return

        if (search === '') {
            setError('No se puede hacer una búsqueda vacía')
            return
        }
        if (search.match(/^\d/)) {
            setError('No puede empezar por un número')
            return
        }
        if (search.length < 3) {
            setError('Debe contener al menos 3 caracteres')
            return
        }
        setError(null)
    }, [search])

    return ({ search, setSearch, error })
}
