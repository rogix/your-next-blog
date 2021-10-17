import { Header } from '../components/Header'

import Link from 'next/link'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </>
  )
}

export default Home
