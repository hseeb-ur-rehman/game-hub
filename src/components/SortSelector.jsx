import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: relevence
      </MenuButton>
      <MenuList>
        <MenuItem>option 1</MenuItem>
        <MenuItem>option 2</MenuItem>
        <MenuItem>option 3</MenuItem>
        <MenuItem>option 4</MenuItem>
        <MenuItem>option 5</MenuItem>
        <MenuItem>option 6</MenuItem>
        
      </MenuList>
    </Menu>
  )
}

export default SortSelector