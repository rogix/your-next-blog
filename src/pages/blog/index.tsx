import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'

import type { Frontmatter } from '../../types/frontmatter'

interface PostsProps {
  posts: Frontmatter[]
}

const Blog = ({ posts }: PostsProps) => {
  return (
    <Box>
      {console.log(posts)}
      {posts.map(({ frontMatter, slug }, index) => {
        const { title } = frontMatter

        return (
          <Link href={'/blog/' + slug} passHref key={index}>
            <Box as="h1">{title}</Box>
          </Link>
        )
      })}
    </Box>
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
