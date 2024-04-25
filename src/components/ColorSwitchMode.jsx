import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const ColorSwitchMode = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const [color, setColor] = useState('')
  useEffect(() => {
    if (colorMode == 'dark') {
      setColor('Dark')
    } else {
      setColor('Light')
    }
  }, [colorMode])
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">{color} Mode</Text>
    </HStack>
  )
}
