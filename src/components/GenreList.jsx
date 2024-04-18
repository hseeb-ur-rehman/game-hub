import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'

const GenreList = () => {
  const { genre } = useGenre()
  return (
    <List>
      {genre.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="56px"
              src={genre.image_background}
            />
            <Text paddingX={5} fontSize="lg">
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
