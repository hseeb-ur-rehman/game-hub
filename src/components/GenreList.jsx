import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import LooadingSkeletonGenre from './LooadingSkeletonGenre'
import { useState } from 'react'

const GenreList = ({ setSelectedGenre , selectedGenre}) => {
  const { genre, isLoading } = useGenre()
  
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <List spacing={3}>
      {isLoading &&
        skeleton.map((skeleton) => <LooadingSkeletonGenre key={skeleton} />)}
      {genre.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              borderRadius={8}
              boxSize="56px"
              src={genre.image_background}
            />
            <Button padding={2} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => setSelectedGenre(genre)} variant="link" paddingX={5} fontSize="lg">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
