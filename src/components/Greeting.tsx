import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Flex, Box, Heading, Text, useColorMode, Button } from '@chakra-ui/react'
import Link from 'next/link'

export const Greeting = () => {
  const { colorMode } = useColorMode()

  return (
    <Flex h="100%" w="100%" align="center" justify="center">
      <Box as="section" mt="50" textAlign="left" p="30px">
        <Heading fontSize="48px" color={colorMode === 'dark' ? "yellow.500" : '#00c2d7'} textTransform="uppercase">Hello, there!</Heading>
        <Heading as="h3" fontSize="24px" color={colorMode === 'dark' ? 'white' : 'gray.700'} textTransform="uppercase" >Another Next.js starter blog!</Heading>
        <Text
          maxW="700px"
          pt="40px"
          color={colorMode === 'dark' ? '#9ba1a6' : 'hsl(206 6.0% 43.5%)'}
          fontSize="24px"
        >
          This is a starter theme created on top of Next.js to help you start
          your blog right now. Feel free to clone it, download
          it, modify it as you please.
        </Text>
        <Button
          variant="outline"
          borderColor="yellow.500"
          borderRadius="3xl"
          mt="60px"
          mb="30px"
          w="200px"
          h="50px"
          fontSize="24px"
          rightIcon={<ArrowForwardIcon />}
          _hover={{
            bg: 'yellow.500',
            color: 'white',
          }}>
          <Link href="/blog">
            <a>
              Go to blog
            </a>
          </Link>
        </Button>
      </Box>
    </Flex>
  )
}
