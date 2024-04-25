import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = ({setSearch}) => {
  const ref = useRef(null);
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(ref.current) setSearch(ref.current.value);
    }}>
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        ref={ref}
        borderRadius={20}
        placeholder="Search Games..."
        variant="filled"
      ></Input>
    </InputGroup>
    </form>
  )
}

export default SearchBar
