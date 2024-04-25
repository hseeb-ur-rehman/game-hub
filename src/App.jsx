import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import Platforms from './components/Platforms'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)
  const [search, setSearch] = useState(null)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '300px 1fr',
        }}
      >
        <GridItem padding={5} area={'nav'}>
          <NavBar setSearch={(search) => setSearch(search)}></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={'aside'} padding={5}>
            <GenreList
              selectedGenre={selectedGenre}
              setSelectedGenre={(genre) => setSelectedGenre(genre)}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <GameHeading
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
          <HStack padding={4} spacing={5}>
            <Platforms
              selectedPlatform={selectedPlatform}
              setSelectedPlatform={(selectedPlatform) =>
                setSelectedPlatform(selectedPlatform)
              }
            />
            <SortSelector
              sortOrder={sortOrder}
              setSortOrder={(setOrder) => setSortOrder(setOrder)}
            />
          </HStack>
          <GameGrid
            search={search}
            sortOrder={sortOrder}
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
