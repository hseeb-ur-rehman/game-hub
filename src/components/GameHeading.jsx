import { Heading } from '@chakra-ui/react'

const GameHeading = ({selectedGenre , selectedPlatform}) => {
  const heading = `${selectedGenre?.name || ''} ${selectedPlatform?.name || ''} Games`
  return (
    <Heading fontSize='5xl' padding={4} as='h1'>{heading}</Heading>
  )
}

export default GameHeading