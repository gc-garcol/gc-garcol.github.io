import { blogs, tags } from "_database_/home-page"
import styled from "styled-components";
import BlogElement from "./components/blog-element";
import { deepClone } from "utils/Util";

const HomePage = () => {

  let blogsUIs = Object.values(blogs);
  let tagUI = deepClone(tags);
  blogsUIs = blogsUIs.map(blog => {
    const blogItem = deepClone(blog);
    blogItem.tags = blogItem.tags.map((tag: string): any => {
      const {name, tagStyles} = tagUI[tag];
      return {name, tagStyles};
    })
    return blogItem;
  });

  console.log(blogsUIs)
  return (
    <Container>
      <HomePageContainer>
        <h1>Content</h1>
        <BlogsContainer>
          {
            blogsUIs.map(blog => <BlogElement key={ blog.id } { ...blog } ></BlogElement>)
          }
        </BlogsContainer>
      </HomePageContainer>
    </Container>
  )
}

export default HomePage;

const Container = styled.div`
background: #fbfbfd;
width: 100%;
min-height: 100vh;
`;

const HomePageContainer = styled.div`
max-width: 888px;
margin-top: 24px;
margin-left: auto;
margin-right: auto;
`;

const BlogsContainer = styled.div`
padding: 20px;
background-color: #ffffff;
`