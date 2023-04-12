import ErrorBoundary from 'components/error/errorBoundary'
import Layout from 'components/layout'
import ListPokemon from 'components/pokemon/ListPokemon'
// import { globalStore } from 'store/global'

const Index = () => {
  // const [onOff, setOnOff] = globalStore((state) => [state.onOff, state.setOnOff])
  // console.log('onoff', onOff)
  return (
    <Layout>
      <ErrorBoundary>
        <ListPokemon />
      </ErrorBoundary>
    </Layout>
  )
}

export default Index
