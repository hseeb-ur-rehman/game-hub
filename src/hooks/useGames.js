import { useState, useEffect } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

const useGames = (selectedGenre, selectedPlatform, sortOrder) => {
  const [games, setGames] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    apiClient
      .get('/games', {
        signal: controller.signal,
        params: {
          genres: selectedGenre?.slug,
          parent_platforms: selectedPlatform?.id,
          ordering: sortOrder,
        },
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
  }, [selectedGenre, selectedPlatform, sortOrder])

  return { error, games, isLoading }
}

export default useGames
