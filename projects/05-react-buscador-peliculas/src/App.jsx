import { useRef } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {

  const inputRef = useRef()
  const { search, updateSearch, error} = useSearch()
  const { movies: mappedMovies, getMovies } = useMovies({search})


  const handleClick = (event) => {
    event.preventDefault()
    getMovies()
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
            onChange={(event) => updateSearch(event.target.value)} value={search} type="text" ref={inputRef} placeholder="Avengers, Matrix,..." />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>


    </div >
  )
}

export default App
