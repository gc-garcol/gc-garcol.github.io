import styled from "styled-components";
import { Link } from 'react-router-dom';

export default (props: any) => {
  return (
    <BlogElementContainer>
      <Title to={ props.url } >{ props.title }</Title>
      <TagContainer>
        {
          props.tags.map((tag: any) => {
            return (
              <Tag to={ `/home?tag=${tag.name}` } key={ tag.name } style={ tag.tagStyles } >{ tag.name }</Tag>
            );
          })
        }
      </TagContainer>
    </BlogElementContainer>
  )
}

const BlogElementContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px 0;
`;

const Title = styled(Link)`
&:hover {
  cursor: pointer;
  font-weight: 600;
}
text-decoration: none;
color: black;
}
`;

const TagContainer = styled.div`
`;

const Tag = styled(Link)`
line-height: 16px;
white-space: nowrap;
display: inline-block;
padding: 4px;
&:hover {
  cursor: pointer;
}
margin-left: 4px;
text-decoration: none;
color: black;
`;