import {
  Skeleton,
  CardBody,
  SkeletonText,
  Card,
} from '@chakra-ui/react'

const LooadingSkeletonGenre = () => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Skeleton  height="10px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default LooadingSkeletonGenre
