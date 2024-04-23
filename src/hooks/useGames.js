import { useState, useEffect } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

const useGames = (selectedGenre, selectedPlatform) => {
  const [games, setGames] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    apiClient
      .get('/games', {
        params: {
          genres: selectedGenre?.slug,
          platforms: selectedPlatform?.id,
        },
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, [selectedGenre, selectedPlatform])

  return { error, games, isLoading }
}

export default useGames
