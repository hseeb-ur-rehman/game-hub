import { Card, CardBody, Heading, HStack, Icon, Img } from '@chakra-ui/react'
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'

const GameCard = ({ games }) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  }

  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Img src={games.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <HStack marginY={2}>
          {games.parent_platforms.map((platform) => (
            <Icon
              key={platform.platform.id}
              boxSize={7}
              color="gray.500"
              as={iconMap[platform.platform.slug]}
            />
          ))}
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
