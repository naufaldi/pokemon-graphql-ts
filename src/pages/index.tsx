import { Button, Container } from '@chakra-ui/react'
import Layout from 'components/layout'
import { globalStore } from 'store/global'

const Index = () => {
  const [onOff, setOnOff] = globalStore((state) => [state.onOff, state.setOnOff])
  console.log('onoff', onOff)
  return (
    <Layout>
      <Container maxW="1280px">
        <Button onClick={() => setOnOff(!onOff)}>Set On Off</Button>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iure aut ut quam alias
        temporibus delectus veniam voluptate, non accusamus minus nobis reiciendis dicta maxime
        voluptas vel, quos nisi quidem?
      </Container>
    </Layout>
  )
}

export default Index
