import { Text, Heading, Container, Flex, Box, Link as PostLink } from '@chakra-ui/react'
import Link from 'next/link'

import type { Frontmatter } from '../../types/frontmatter'
import { Header } from '../../components/Header'
import { getAllFrontmatter } from '../../lib/mdx'

interface Props {
  frontmatters: Frontmatter[]
}

const Blog = ({ frontmatters }: Props) => {
  return (
    <>
      <Header />
      <Container mt="10" maxW="container.sm">
        <Flex align="center" justify="center" flexDir="column" mb="40px">
          <Heading pb="10px">Blog</Heading>
          <Text>Let us talk about it</Text>
        </Flex>
        {frontmatters.map((frontmatter, index) => {
          return (
            <Box mb="40px" key={index}>
              <Link href={'/blog/' + frontmatter.slug} passHref key={index}>
                <PostLink display="inline-flex">
                  <Box as="h3" fontSize="2xl">
                    {frontmatter.title}
                  </Box>
                </PostLink>
              </Link>
              <Flex color="gray.500">{frontmatter.publishedAt} by {frontmatter.author}</Flex>
              <Flex color="gray">{frontmatter.description}</Flex>
            </Box>
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
