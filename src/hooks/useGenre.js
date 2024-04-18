import { useState, useEffect } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

const useGenre = () => {
  const [genre, setGenre] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    apiClient
      .get('/genres', { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { error, genre, isLoading }
}

export default useGenre
