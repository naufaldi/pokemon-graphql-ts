import { Button, Container } from '@chakra-ui/react'
import Layout from 'components/layout'
import ListPokemon from 'components/pokemon/ListPokemon'
import { globalStore } from 'store/global'

const Index = () => {
  const [onOff, setOnOff] = globalStore((state) => [state.onOff, state.setOnOff])
  console.log('onoff', onOff)
  return (
    <Layout>
      <Container maxW="1280px">
        <Button onClick={() => setOnOff(!onOff)}>Set On Off</Button>
        <ListPokemon />
      </Container>
    </Layout>
  )
}

export default Index
