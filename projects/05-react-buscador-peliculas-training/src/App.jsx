import { useState } from 'react'
import { Movies } from './Compoonents/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

const App = () => {
  const [sort,setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const errorClassName = error ? 'error' : null
  const { movies, loading, getMovies } = useMovies({ sort })
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGetMovies = useCallback(debounce(({search}) => getMovies({search}),300),[getMovies])

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies({search: newSearch})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  return (
    <div className="page">
      <header>
        <h1>
          Film recomendator
        </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={handleChange} className={'filmInput' + ' ' + errorClassName} />
          <input type="checkbox" checked={sort} onChange={() => setSort(!sort)} />
          <button type="submit">Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>
      <main>
        {loading ? <p>Loading...</p>
          : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}
export default App