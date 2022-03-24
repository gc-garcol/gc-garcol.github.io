import styled from "styled-components";
import BlogElement from "./components/blog-element";
import { Link, URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { BlogRepository } from "_database_/blog-repository";
import { deepClone } from "utils/Util";
import { BaseContent, Container, Tag } from "common/Common";
import MenuBar from "common/components/menu/MenuBar";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  let blogsUIs: any;
  let tags = BlogRepository.fetchAllTags();
  let blogs = BlogRepository.fetchAllBlogs();

  // todo refactor for filtering
  const tag: any = searchParams.get('tag');
  if (tag) {
    if (!tags[tag]) {
      return <Link to="/404"></Link>
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
      <MenuBar />
      <BaseContent>
        <TitleWrapper className="title-wrapper">
          <h1 style={ {marginRight: '16px'} }>Content</h1>
          <Tag to={ `/` } style={ { backgroundColor: '#ed894c', fontWeight: 'bold' } } >#all</Tag>
          {
            tag && <Tag to={ `/home?tag=${tags[tag].name}` } style={ tags[tag].tagStyles } >{ tags[tag].name }</Tag>
          }
        </TitleWrapper>
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

const TitleWrapper = styled.div`
display: flex;
align-items: center;
margin-bottom: 32px;
`

const BlogsContainer = styled.div`
padding: 20px;
background-color: #ffffff;
`

const filter = (searchParams: URLSearchParamsInit) => {

}