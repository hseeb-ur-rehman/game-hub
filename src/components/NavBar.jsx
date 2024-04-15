import { HStack, Img } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorSwitchMode } from './ColorSwitchMode'

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Img borderRadius="10px" boxSize="60px" src={logo} />
      <ColorSwitchMode></ColorSwitchMode>
    </HStack>
  )
}

export default NavBar
