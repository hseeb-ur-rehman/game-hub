import { background, Badge } from '@chakra-ui/react'
import React from 'react'

const CriticScore = ({ score }) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'

  return (
    <Badge borderRadius={4} fontSize={14} paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  )
}

export default CriticScore
