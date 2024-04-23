import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import LoadingSkeletons from './LoadingSkeletons'

const GameGrid = ({selectedGenre}) => {
  const { error, games, isLoading } = useGames(selectedGenre)
  const skeleton = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <SimpleGrid padding={5} columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
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
