import { CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FallbackProps } from 'react-error-boundary'
const errorDisplay = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="red.500"
          rounded="50px"
          w="55px"
          h="55px"
          textAlign="center"
        >
          <CloseIcon boxSize="20px" color="white" />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Something Wrong!
      </Heading>
      <Text color="gray.500">{error.message}</Text>
      <Button colorScheme="teal" onClick={resetErrorBoundary}>
        Refresh
      </Button>
    </Box>
  )
}

export default errorDisplay
