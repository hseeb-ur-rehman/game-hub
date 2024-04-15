import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'

const GameGrid = () => {
  const { error, games } = useGames()

  return (
    <>
      {error && <Text color={'red'}>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name} {game.slug}
          </li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid
