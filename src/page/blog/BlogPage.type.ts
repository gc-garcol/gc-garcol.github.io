export interface BlogPageProps {
  id: string,
  title: string
}

export interface BlogType {
  id: string,
  title: string,
  description: "",
  url: "/blog/20220323-01_understanding-bitwise-operators",
  tags: TagType[]
}

export interface TagType {
  name: string,
  tagStyles: object
}