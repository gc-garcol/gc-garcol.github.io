import { blogs, tags } from "_database_/home-page"
import styled from "styled-components";
import BlogElement from "./components/blog-element";
import { deepClone } from "utils/Util";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCallback } from "react";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  let blogsUIs: any;
  let tagClone = deepClone(tags);
  let blogClone = deepClone(blogs);

  const tag: any = searchParams.get('tag');
  if (tag) {
    if (!tagClone[tag]) {
      window.location.href = '/404';
      return (<div></div>);
    }
    const postIDs = tagClone[tag].postIDs;
    blogsUIs = Object.values(deepClone(postIDs.map((id: string) => blogClone[id])));
  } else {
    blogsUIs = Object.values(blogs);
  }

  blogsUIs = blogsUIs.map((blog: any) => {
    const blogItem = deepClone(blog);
    blogItem.tags = blogItem.tags.map((tag: string): any => {
      const {name, tagStyles} = tagClone[tag];
      return {name, tagStyles};
    })
    return blogItem;
  });

  return (
    <Container>
      <HomePageContainer>
        <h1>Content</h1>
        <BlogsContainer>
          {
            blogsUIs.map((blog:any) => <BlogElement key={ blog.id } { ...blog } ></BlogElement>)
          }
        </BlogsContainer>
      </HomePageContainer>
    </Container>
  )
}

export default HomePage;

const Container = styled.div`
background: #fcfafa;
// background: #fbfbfd;
// background-image: linear-gradient(-15deg,rgba(255,122,24,.25),#fff);
// background: #eaeaea;
width: 100%;
min-height: 100vh;
`;

const HomePageContainer = styled.div`
max-width: 888px;
padding-top: 24px;
margin-left: auto;
margin-right: auto;
`;

const BlogsContainer = styled.div`
padding: 20px;
background-color: #ffffff;
`