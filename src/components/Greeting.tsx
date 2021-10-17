import { Flex, Box, Heading, Text, useColorMode } from '@chakra-ui/react'

export const Greeting = () => {
  const { colorMode } = useColorMode()
  return (
    <Flex h="100%" w="100%" align="center" justify="center">
      <Box as="p" mt="20" textAlign="center" p="30px">
        <Text fontSize="48px">Hi, there!</Text>
        <Text fontSize="24px">Welcome to your Next starter theme!</Text>
        <Text
          maxW="500px"
          pt="30px"
          color={colorMode === 'dark' ? '#9ba1a6' : 'hsl(206 6.0% 43.5%)'}
        >
          This is a starter theme created on top of Next.js to help you start
          your blog as soon as you think of it. Feel free to clone it, download
          it, modify it as you please.
        </Text>
      </Box>
    </Flex>
  )
}
