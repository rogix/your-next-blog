export type Frontmatter = {
  title: string
  description?: string
  author?: string
  relatedIds?: string[]
  type?: 'changelog' | string
  readingTime?: { text: string; minutes: number; time: number; words: number }
  poster?: string
  slug: string
  publishedAt: string
}
