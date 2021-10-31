import {
  Flex,
  Button,
  useColorMode,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { Link as Lnk } from '@chakra-ui/react'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
      as="header"
      h="70px"
      w="100%"
      align="center"
      justify="space-between"
      pr="20px"
      pl="20px"
    >
      <HStack>
        <Link href="/" passHref>
          <Button bg="transparent">
            <a>Home</a>
          </Button>
        </Link>
        <Link href="/blog" passHref>
          <Button bg="transparent">
            <a>Blog</a>
          </Button>
        </Link>
      </HStack>
      <HStack>
        <Link href="https://github.com/rogix" passHref={true}>
          Github
        </Link>
        <IconButton
          aria-label="toggle dark mode"
          onClick={toggleColorMode}
          bg="transparent"
        >
          <SunIcon />
          {/* {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} */}
        </IconButton>
      </HStack>
    </Flex>
  )
}
