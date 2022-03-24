import { Link } from "react-router-dom";
import styled from "styled-components"

export default () => {
  return (
    <Container className="container">
      <LogoWrapper to="/">
        <Logo className="" src={ require('./resources/fox-2.png') } alt="" />
        <LogoName>Garcol</LogoName>
      </LogoWrapper>
      <MenuWrapper>
        <PageLink to="/">Home</PageLink>
      </MenuWrapper>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 32px;

background: rgb(244 243 239 / 80%);
color: var(--color-text-default);
height: 56px;
position: sticky;
top: 0;
box-shadow: 0px 4px 8px -2px rgb(255 255 255 / 16%);

@media (max-width: 768px) {
  padding: 0 16px;
}
`;

const LogoWrapper = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
`

const Logo = styled.img`
height: 56px;
`

const LogoName = styled.p`
font-weight: bold;
font-size: 24px;
color: #ff8401;
`

const MenuWrapper = styled.div``

const PageLink = styled(Link)`
text-decoration: none;
color: black;
`