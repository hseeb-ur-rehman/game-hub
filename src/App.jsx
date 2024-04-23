import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import Platforms from './components/Platforms'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState(null)
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
        <GridItem area={'nav'}>
          <NavBar></NavBar>
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
          <Platforms
              setSelectedPlatform={(selectedPlatform) =>
              setSelectedPlatform(selectedPlatform)
            }
          />
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
