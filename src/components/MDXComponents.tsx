import { Heading, Text, List, OrderedList, ListItem } from '@chakra-ui/react'
import CodeBlock from '../../lib/codeBlock'

export const components = {
  h1: (props: any) => <Heading as="h1" mb="6" size="2xl" {...props} />,
  h2: (props: any) => <Heading as="h2" mb="6" size="xl" {...props} />,
  h3: (props: any) => <Heading as="h3" mb="6" size="lg" {...props} />,
  h4: (props: any) => <Heading as="h4" mb="6" size="md" {...props} />,
  h5: (props: any) => <Heading as="h5" mb="6" size="sm" {...props} />,
  h6: (props: any) => <Heading as="h6" mb="6" size="xs" {...props} />,
  ul: (props: any) => <List styleType ml="4" mb="4" {...props} />,
  li: (props: any) => <ListItem ml="4" mt="1" {...props} />,
  ol: (props: any) => <OrderedList mb="4" {...props} />,
  p: (props: any) => <Text mb="4" {...props} />,
  code: CodeBlock,
}
