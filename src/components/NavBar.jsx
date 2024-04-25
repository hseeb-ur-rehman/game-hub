import { HStack, Img } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorSwitchMode } from './ColorSwitchMode'
import SearchBar from './SearchBar'

const NavBar = ({setSearch}) => {
  return (
    <HStack>
      <Img borderRadius="10px" boxSize="60px" src={logo} />
      <SearchBar setSearch={setSearch}/>
      <ColorSwitchMode></ColorSwitchMode>
    </HStack>
  )
}

export default NavBar
