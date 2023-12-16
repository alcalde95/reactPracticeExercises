import { useState, useEffect } from 'react'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1).join()
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { _id } = data
        setImageUrl(`${_id}/says/${firstWord}`)
      })
  }, [fact])

  return { imageUrl }
}
