import { useState } from 'react'
import './App.css'
import { searchMovies } from './services/movies'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import { Movies } from './Components/Movies'
function App() {

  const movies = responseMovies.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return (
    <div className='page'>
      <header>
        <h1>Recomendador de películas</h1>
        <form>
          <input type="text" placeholder="Avengers, Matrix,..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies}/>
    </main>


    </div >
  )
}

export default App
