import { Card, CardBody, Heading, Img } from '@chakra-ui/react'

const GameCard = ({ games }) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Img src={games.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
