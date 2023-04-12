import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ErrorBoundary } from 'react-error-boundary'

import apolloClient from '../apolloClient'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </ErrorBoundary>
  )
}

export default MyApp
