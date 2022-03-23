import { BlogElementProps } from "./blog-element.type";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import { useCallback } from "react";
import { onClickTag } from "utils/tag-util";

export default (props: any) => {
  const navigate = useNavigate();
  const handleNavigate = useCallback(() => navigate(`${props.url}`, {replace: true}), [navigate]);
  return (
    <BlogElementContainer>
      <Title onClick={handleNavigate} >{ props.title }</Title>
      <TagContainer>
        {
          props.tags.map((tag: any) => {
            const handleNavigateTag = useCallback(() => navigate(`/home?tag=${tag.name}`, {replace: true}), [navigate]);
            return (
              <Tag onClick={() => onClickTag(tag.name, handleNavigateTag) } key={ tag.name } style={ tag.tagStyles } >{ tag.name }</Tag>
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

const Title = styled.p`
&:hover {
  cursor: pointer;
  font-weight: 600;
}
`;

const TagContainer = styled.div`
`;

const Tag = styled.span`
line-height: 16px;
white-space: nowrap;
display: inline-block;
padding: 4px;
&:hover {
  cursor: pointer;
}
margin-left: 4px;
`;