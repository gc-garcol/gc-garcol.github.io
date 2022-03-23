import styled from "styled-components";
import BlogElement from "./components/blog-element";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { BlogRepository } from "_database_/blog-repository";
import { deepClone } from "utils/Util";
import { BaseContent, Container } from "common/Common";

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

  blogsUIs.reverse();

  return (
    <Container>
      <BaseContent>
        <h1>Content</h1>
        <BlogsContainer>
          {
            blogsUIs.map((blog:any) => <BlogElement key={ blog.id } { ...blog } ></BlogElement>)
          }
        </BlogsContainer>
      </BaseContent>
    </Container>
  )
}

export default HomePage;

const BlogsContainer = styled.div`
padding: 20px;
background-color: #ffffff;
`

const filter = (searchParams: URLSearchParamsInit) => {

}