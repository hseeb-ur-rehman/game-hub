import { Card, CardBody, Heading, HStack, Img } from '@chakra-ui/react'
import CriticScore from './CriticScore'
import PlatformsIcons from './PlatformsIcons'
import getCroppedImageURL from '../services/get-cropped-image'

const GameCard = ({ games }) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Img src={getCroppedImageURL(games.background_image)} />
      <CardBody>
        <HStack templatco justifyContent={'space-between'} paddingBottom={5}>
          <PlatformsIcons games={games} />
          <CriticScore score={games.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{games.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
