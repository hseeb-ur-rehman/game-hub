import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        borderRadius={20}
        placeholder="Search Games..."
        variant="filled"
      ></Input>
    </InputGroup>
  )
}

export default SearchBar
