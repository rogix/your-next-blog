import { getMDXComponent } from 'mdx-bundler/client'

import { Header } from '../../components/Header'
import { Box, Container, Heading } from '@chakra-ui/react'

import type { Frontmatter } from '../../types/frontmatter'
import CodeBlock from '../../../lib/codeBlock'
import { useMemo } from 'react'
import { getAllFrontmatter, getMdxBySlug } from '../../../lib/mdx'

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
      <Container maxW="container.md" mt="20">
        <Heading>{frontmatter.title}</Heading>
        <Component />
      </Container>
    </Box>
  )
}

export const getStaticPaths = async () => {
  const frontmatters = getAllFrontmatter('blog')

  return {
    paths: frontmatters.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const { frontmatter, code } = await getMdxBySlug('blog', context.params.slug)

  return {
    props: {
      frontmatter,
      code,
    },
  }
}

export default BlogPost
