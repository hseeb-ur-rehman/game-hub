import { Card, CardBody, Heading, HStack, Img } from '@chakra-ui/react'
import CriticScore from './CriticScore'
import PlatformsIcons from './PlatformsIcons'
import getCroppedImageURL from '../services/get-cropped-image'

const GameCard = ({ games }) => {
  return (
    <Card width="500px" borderRadius={10} overflow={'hidden'}>
      <Img src={getCroppedImageURL(games.background_image)} />
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
