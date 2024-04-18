import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import LoadingSkeletons from './LoadingSkeletons'

const GameGrid = () => {
  const { error, games, isLoading } = useGames()
  const skeleton = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {error && <Text color={'red'}>{error}</Text>}
      <SimpleGrid padding={10} columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {isLoading &&
          skeleton.map((skeleton) => <LoadingSkeletons key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} games={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
