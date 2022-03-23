import styled from "styled-components";
import BlogElement from "./components/blog-element";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { BlogRepository } from "_database_/blog-repository";
import { deepClone } from "utils/Util";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  let blogsUIs: any;
  let tags = BlogRepository.fetchAllTags();
  let blogs = BlogRepository.fetchAllBlogs();

  // todo refactor for filtering
  const tag: any = searchParams.get('tag');
  if (tag) {
    if (!tags[tag]) {
      window.location.href = '/404';
      return (<div></div>);
    }
    const postIDs = tags[tag].postIDs;
    blogsUIs = Object.values(deepClone(postIDs.map((id: string) => blogs[id])));
  } else {
    blogsUIs = Object.values(blogs);
  }

  blogsUIs = blogsUIs.map((blog: any) => {
    const blogItem = deepClone(blog);
    blogItem.tags = blogItem.tags.map((tag: string): any => {
      const {name, tagStyles} = tags[tag];
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

const filter = (searchParams: URLSearchParamsInit) => {

}