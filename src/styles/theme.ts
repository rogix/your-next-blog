import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },

  // styles: {
  //   global: {
  //     body: {
  //       bg: 'gray.500',
  //       color: 'white',
  //     },
  //   },
  // },
})

export default theme
