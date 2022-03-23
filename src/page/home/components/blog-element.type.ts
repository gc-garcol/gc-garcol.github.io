export interface BlogElementProps {
  id: string,
  title: string,
  description: string,
  url: string
  tags: BlogElementTagType[]
}

export interface BlogElementTagType {
  name: string,
  tagStyles: object
}