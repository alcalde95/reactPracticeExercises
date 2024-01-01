import { useRef } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useState } from 'react'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

function App() {

  const inputRef = useRef()
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies: mappedMovies, loading, getMovies } = useMovies({ search, sort })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies])

  const handleClick = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Recomendador de películas</h1>
        <form onSubmit={handleClick}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange} value={search} type="text" ref={inputRef} placeholder="Avengers, Matrix,..." />
          <input type='checkbox' onClick={handleSort}></input>
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading
            ? <p>Cargando...</p>
            : <Movies movies={mappedMovies} />

        }
      </main>


    </div >
  )
}

export default App
