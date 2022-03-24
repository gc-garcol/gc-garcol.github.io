import { Link } from "react-router-dom";
import styled from "styled-components"

export default () => {
  return (
    <Container className="container">
      <LogoWrapper>
        <Logo className="" src={ require('./resources/docker.png') } alt="" />
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

background: rgba(251, 251, 251, 0.8);
color: var(--color-text-default);
height: 56px;
position: sticky;
box-shadow: 0px 4px 8px -2px rgb(255 255 255 / 16%);

@media (max-width: 768px) {
  padding: 0 16px;
}
`;

const LogoWrapper = styled.div`
display: flex;
align-items: center;
`

const Logo = styled.img`
height: 56px;
`

const LogoName = styled.p`
font-weight: bold;
font-size: 24px;
color: #b2b3b3;
`

const MenuWrapper = styled.div``

const PageLink = styled(Link)`
text-decoration: none;
color: black;
`