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

import { HStack, Icon } from '@chakra-ui/react'

const PlatformsIcons = ({ games }) => {
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
    <HStack>
      {games.parent_platforms.map((platform) => (
        <Icon
          key={platform.platform.id}
          boxSize={7}
          color="gray.500"
          as={iconMap[platform.platform.slug]}
        />
      ))}
    </HStack>
  )
}

export default PlatformsIcons
