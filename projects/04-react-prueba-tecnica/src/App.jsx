import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'
export const App = () => {
  const { fact, updateRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  return (
    <main>
      <h1>Random Cat Fact and Image</h1>
      <button onClick={() => updateRandomFact()}> Refresh fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt={`A image generated using the first word of ${fact}`} />}
    </main>
  )
}
