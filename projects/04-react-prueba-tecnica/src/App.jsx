import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_URL = 'https://cataas.com/cat'
export const App = () => {
  const [fact, setFact] = useState()
  const [firstWord, setFirstWord] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const _fact = data.fact
        setFact(_fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const _firstWord = fact.split(' ', 1).join(' ')
    setFirstWord(_firstWord)
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        setImageUrl(`/${_id}/says/${firstWord}`)
      })
  }, [fact])

  return (
    <main>
      <h1>Aplicación de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_ENDPOINT_URL}${imageUrl}`} alt={`Imagen de gato sacada usando la primera palabra de ${fact}`} />}
      </section>
    </main>
  )
}
