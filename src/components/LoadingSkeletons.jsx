import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const LoadingSkeletons = () => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Skeleton height="350px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default LoadingSkeletons
