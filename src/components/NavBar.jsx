import { HStack, Img, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    <HStack>
      <Img borderRadius="10px" m="10px" boxSize="60px" src={logo} />
      <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar
