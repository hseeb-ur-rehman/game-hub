import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  Img,
} from '@chakra-ui/react'
import CriticScore from './CriticScore'
import PlatformsIcons from './PlatformsIcons'

const GameCard = ({ games }) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Img src={games.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <HStack justifyContent={'space-between'} marginY={2}>
          <PlatformsIcons games={games} />
          <CriticScore score={games.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
