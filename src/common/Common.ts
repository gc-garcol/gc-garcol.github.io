import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
background: #fcfafa;
// background: #fbfbfd;
// background-image: linear-gradient(-15deg,rgba(255,122,24,.25),#fff);
// background: #eaeaea;
width: 100%;
min-height: 100vh;
`;

export const BaseContent = styled.div`
max-width: 888px;
padding: 40px 16px 40px 16px;
margin-left: auto;
margin-right: auto;
background-color: #ffffff;
`;

export const Tag = styled(Link)`
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

export const BlogTag = styled(Tag)`
margin-left: 0;
margin-right: 4px;
`