import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { Header } from '../../components/Header'
import { Box, Container, Heading, Link as BlogLink } from '@chakra-ui/react'

import type { Frontmatter } from '../../types/frontmatter'
import { getAllFrontmatter, getMdxBySlug } from '../../lib/mdx'
import { MDXcomponents } from '../../components/MDXComponents'

import Link from 'next/link'
import { ArrowBackIcon } from '@chakra-ui/icons'

type Props = {
  params: Frontmatter
  frontmatter: Frontmatter
  code: any
}

const BlogPost = ({ frontmatter, code }: Props) => {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <Box>
      <Header />
      <Container as="article" maxW="container.md" mt="20">
        <Link href="/blog">
          <BlogLink textAlign="center"><ArrowBackIcon /> Back to blog</BlogLink>
        </Link>
        <Heading as="h1" mb="6" mt="20px">
          {frontmatter.title}
        </Heading>
        <Component components={MDXcomponents as any} />
      </Container>
    </Box>
  )
}

export const getStaticPaths = async () => {
  const frontmatters = getAllFrontmatter('posts')

  return {
    paths: frontmatters.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const { frontmatter, code } = await getMdxBySlug('posts', context.params.slug)

  return {
    props: {
      frontmatter,
      code,
    },
  }
}

export default BlogPost
