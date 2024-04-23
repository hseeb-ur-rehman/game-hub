import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const Platforms = ({ setSelectedPlatform, selectedPlatform }) => {
  const { platforms } = usePlatforms()
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms.map((platforms) => (
          <MenuItem
            onClick={() => setSelectedPlatform(platforms)}
            key={platforms.id}
          >
            {platforms.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default Platforms
