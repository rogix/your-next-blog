import { Text, Heading, Container, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import type { Frontmatter } from '../../types/frontmatter'
import { Header } from '../../components/Header'
import { getAllFrontmatter } from '../../../lib/mdx'

interface Props {
  frontmatters: Frontmatter[]
}

const Blog = ({ frontmatters }: Props) => {
  return (
    <>
      <Header />
      <Container mt="10" maxW="container.sm">
        <Flex align="center" justify="center" flexDir="column">
          <Heading pb="10px">Blog</Heading>
          <Text>Let us talk about it</Text>
        </Flex>
        {frontmatters.map((frontmatter, index) => {
          return (
            <Link href={'/blog/' + frontmatter.slug} passHref key={index}>
              <a>{frontmatter.title}</a>
            </Link>
          )
        })}
      </Container>
    </>
  )
}

export function getStaticProps() {
  const frontmatters = getAllFrontmatter('posts')
  const sortedFrontmatters = frontmatters.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  )
  return { props: { frontmatters: sortedFrontmatters } }
}

export default Blog
