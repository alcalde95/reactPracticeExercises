import './App.css'
import { useRandomFact } from './hooks/useRandomFact'
import { useCatImage } from './hooks/useCatImage'

const CAT_IMAGE_PREFIX = 'https://cataas.com/cat/'
export const App = () => {
  const { fact, refreshFact } = useRandomFact()
  const { imageUrl } = useCatImage({ fact })

  const handleRefreshFactClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Random cat fact enterview</h1>
      <button onClick={() => handleRefreshFactClick()}>Refresh fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_IMAGE_PREFIX}${imageUrl}`} alt={`An image generated with the first word of ${fact}`} />}

    </main>
  )
}
