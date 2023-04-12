import { Container } from '@chakra-ui/react'
import React from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container maxW="1280px" mx="auto">
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
