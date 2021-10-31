import { useColorMode } from '@chakra-ui/color-mode'
import Highlight, { defaultProps } from 'prism-react-renderer'
import dracula from 'prism-react-renderer/themes/dracula'
import github from 'prism-react-renderer/themes/github'

const CodeBlock = ({ children, className }) => {
  const { colorMode } = useColorMode()
  const language = className.replace(/language-/, '')

  return (
    <Highlight
      {...defaultProps}
      theme={colorMode === 'dark' ? dracula : github}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code
          className={className}
          style={{
            ...style,
            padding: '20px',
            backgroundColor: 'none',
            display: 'block',
          }}
        >
          {tokens.map((line, i) => {
            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </code>
      )}
    </Highlight>
  )
}

export default CodeBlock
