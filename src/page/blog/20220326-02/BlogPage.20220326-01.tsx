import { BaseContent, BlogTag, Container } from "common/Common";
import { BlogRepository } from "_database_/blog-repository";
import { BlogType } from "page/blog/BlogPage.type";
import { Title, TagsContainer, ContentContainer, H2, RefLink, H3 } from "../_common_/blog-common";
import { CopyBlock, dracula } from "react-code-blocks";
import MenuBar from "common/components/menu/MenuBar";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styled from "styled-components";

const ID = "20220326-02";
export const BlogPage2022032602 = () => {

  const blog: BlogType = BlogRepository.fetchBlogById(ID);

  return (
    <Container className="container">
      <MenuBar />
      <BaseContent className="base-content">
        <Title>{ blog.title }</Title>
        <TagsContainer>
          <span className="text-bold">Tags: </span>
          <BlogTag to="/" style={ { backgroundColor: '#ed894c', fontWeight: 'bold', marginRight: '4px' }} >#all</BlogTag>
          {
            blog.tags.map(tag => {
              return (
                <BlogTag className="blog-tag" to={ `/home?tag=${tag.name}` } key={ tag.name } style={ tag.tagStyles } >{ tag.name }</BlogTag>
              )
            })
          }
        </TagsContainer>
        <ContentContainer>
          <H2>About</H2>
          <RefLink className="20220324-01__introduction mg-t-8" target="_blank" href="https://www.udemy.com/course/design-microservices-architecture-with-patterns-principles/">Udemy courses: Design Microservices Architecture with Patterns & Principles</RefLink>
          <H2>Updating...</H2>
        </ContentContainer>
      </BaseContent>
    </Container>
  );
}

const ContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const FeatureWrapper = styled.div`
`
const Feature = styled.a`
display: block;
margin-top: 8px;
text-decoration: none;
cursor: pointer;
color: #000000;
&:hover {
  font-weight: bold;
}
&:nth-child(1) {
  margin-top: 16px;
}
&.red {
  color: red;
}

&.blue {
  color: #4c6a98;
}
`