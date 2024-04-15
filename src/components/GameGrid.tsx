import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

const GameGrid = () => {
  const { error, games } = useGames()

  return (
    <>
      {error && <Text color={'red'}>{error}</Text>}
      <SimpleGrid
        padding={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} games={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
