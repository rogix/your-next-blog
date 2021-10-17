import { Header } from '../components/Header'

import type { NextPage } from 'next'
import { Greeting } from '../components/Greeting'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Greeting />
    </>
  )
}

export default Home
