import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Poppins, Helvetica, sans-serif',
    body: 'Poppins, Helvetica, sans-serif'
    ,
  },

  colors: {
    yellow: {
      50: '#fff8da',
      100: '#ffe9ad',
      200: '#ffda7d',
      300: '#ffcb4b',
      400: '#ffbc1a',
      500: '#e6a200',
      600: '#b37e00',
      700: '#815a00',
      800: '#4e3600',
      900: '#1e1100',
    },
    blue: {
      500: '#00c2d7'
    }
  },

  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        backgroundColor: props.colorMode === 'light' ? '#fff' : '#111',
        color: props.colorMode === 'dark' ? 'gray.300' : 'gray.700',
      },
    }),
  },
})

export default theme
