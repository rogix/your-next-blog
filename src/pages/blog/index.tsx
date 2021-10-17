import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Box, Text, Heading, Container, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import type { Frontmatter } from '../../types/frontmatter'
import { Header } from '../../components/Header'

interface PostsProps {
  posts: Frontmatter[]
}

const Blog = ({ posts }: PostsProps) => {
  return (
    <>
      <Header />
      <Container mt="10" maxW="container.sm">
        <Flex align="center" justify="center" flexDir="column">
          <Heading pb="10px">Blog</Heading>
          <Text>Let us talk about it</Text>
        </Flex>
        {posts.map(({ frontMatter, slug }, index) => {
          const { title } = frontMatter

          return (
            <Link href={'/blog/' + slug} passHref key={index}>
              <a>{title}</a>
            </Link>
          )
        })}
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8',
    )
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })
  return {
    props: {
      posts,
    },
  }
}

export default Blog
