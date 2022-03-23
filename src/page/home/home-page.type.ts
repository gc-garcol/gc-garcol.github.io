export interface BlogElement {
  id: string,
  title: string,
  description: string,
  url: string,
  tags: string[]
}

export interface HomePageState {
  blogs: BlogElement[]
}